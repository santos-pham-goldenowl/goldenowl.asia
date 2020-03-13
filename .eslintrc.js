module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "no-console": "off",
    "no-debugger": "off",
    "global-require": "off",
    "no-restricted-globals": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "max-len": ["error", 120, { "ignoreTemplateLiterals": true }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "react/jsx-fragments": ["error", true],
  }
}
