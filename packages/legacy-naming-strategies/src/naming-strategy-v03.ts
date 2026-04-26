import { DefaultNamingStrategy } from "typeorm"
import { RandomGeneratorV0 } from "./random-generator-v0"

export class NamingStrategyV03 extends DefaultNamingStrategy {
    protected hash(input: string): string {
        return RandomGeneratorV0.sha1(input)
    }
}
