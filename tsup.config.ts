import { defineConfig } from "tsup"

export default defineConfig({
    format: ["cjs", "esm"],
    outDir: "./dist",
    entry: ["./src/index.ts"],
    clean: true,
    bundle: true,
    minify: true,
    dts: true
})