import pkg from "./package.json";
import del from "rollup-plugin-delete";
import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import image from '@rollup/plugin-image';

export default [
  {
    input: "src/index.js", //vao
    output: [ //ra
      {
        file: "react-app-test-suite/src/exported-components/index.js", //bundle thanh file nay, tu tao folder moi luon 
        format: "esm", 
        banner: "/* eslint-disable */",
      },
      { file: pkg.main, format: "cjs" }, //index.js
      { file: pkg.module, format: "esm" }, 
    ], // ra
    plugins: [ //de impport non-js files
      image(), 
      external(),
      babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
      del({ targets: ["dist/*", "react-app-test-suite/src/exported-components"] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
