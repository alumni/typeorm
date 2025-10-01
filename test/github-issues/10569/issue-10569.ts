import "reflect-metadata"

import { expect } from "chai"

import { DataSource } from "../../../src/data-source/DataSource"
import {
    closeTestingConnections,
    createTestingConnections,
    reloadTestingDatabases,
} from "../../utils/test-utils"
import { CreateUserContract } from "./contract/create-user-contract"
import { User } from "./entity/user"

describe("github issues > #10569 Fix type inference of EntityManager#create", () => {
    let dataSources: DataSource[]
    before(
        async () =>
            (dataSources = await createTestingConnections({
                entities: [__dirname + "/entity/*{.js,.ts}"],
                enabledDrivers: ["postgres"],
                schemaCreate: true,
                dropSchema: true,
            })),
    )
    beforeEach(() => reloadTestingDatabases(dataSources))
    after(() => closeTestingConnections(dataSources))

    it("should correctly inference entity type", () => {
        dataSources.forEach((dataSource) => {
            const createUserContract: CreateUserContract = {
                name: "John Doe",
            }

            const user = dataSource.manager.create(User, createUserContract)

            user.id = globalThis.crypto.randomUUID()

            expect(user.id).to.exist
        })
    })
})
