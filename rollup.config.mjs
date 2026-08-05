import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: "dist/index.es.js",
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        typescript()
    ]
};
