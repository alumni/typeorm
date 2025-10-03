import { beforeAll, afterAll } from "vitest"

declare global {
    declare const before: typeof beforeAll
    declare const after: typeof afterAll
}
