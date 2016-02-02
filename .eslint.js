module.exports = {
  "rules": {
    "no-console": [0],
    "indent": [
      2,
      2,
      {"SwitchCase": 1}
    ],
    "quotes": [
      2,
      "double"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "never"
    ]
  },
  //"parser": "babel-eslint", // using ecmaFeatures.modules instead
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    modules: true,
    "jsx": true,
    "experimentalObjectRestSpread": true
  },
  "plugins": [
    "react"
  ]
}
