module.exports = {
  extends: [`${__dirname}/../../config/eslint/eslintrc.js`],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
    sourceType: "module",
  },
<<<<<<<< HEAD:packages/hardhat-ignition-core/.eslintrc.js
  ignorePatterns: [".eslintrc.js", "./dist/**/*", "./node_modules/**/*"],
========
  rules: {
    "import/no-extraneous-dependencies": "off",
  },
>>>>>>>> upstream/main:js/helpers/.eslintrc.cjs
};
