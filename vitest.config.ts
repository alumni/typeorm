import { configDefaults, defineConfig } from "vitest/config"
export default defineConfig({
    test: {
        coverage: {
            provider: "v8",
            reporter: "lcov",
        },
        exclude: [...configDefaults.exclude, "**/entity/*.js"],
        globals: true,
        include: ["build/compiled/test/**/*.js"],
        isolate: false,
        passWithNoTests: true,
        poolOptions: {
            forks: {
                execArgv: ["--enable-source-maps"],
                singleFork: true,
            },
        },
        testTimeout: 90_000,
    },
})
