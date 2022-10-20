module.exports = {
  extends: ["@doublenc-inc/eslint-config-typescript"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
  },
};
