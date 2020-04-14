module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  "rules": {
    "max-len": [
      "error",
      { "code": 150 }
    ],
    "no-console": [0],
    "no-debugger": [0],
    "no-unused-expressions": [0],
    "react/prop-types": [0],
    "react/no-unescaped-entities": [0],
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx"] }
    ],
    "react/prefer-stateless-function": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/label-has-associated-control": [0],
    "jsx-a11y/control-has-associated-label": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
  },
}
