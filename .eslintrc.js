module.exports = {
    "env": {
        "node": true,
    },
    "parser": "@babel/eslint-parser",
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "plugins": [
        "prettier",
        "@babel"
    ],
    "root": true,
    "rules": {
        "func-names": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        "camelcase": "off",
        "import/prefer-default-export": "off",
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",
        "no-continue": "off",
        "import/no-dynamic-require": "off",
        "prettier/prettier": [
            "error"
        ],
        "curly": "error"
    }
}
