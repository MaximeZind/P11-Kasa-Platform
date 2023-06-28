module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/prop-types": ["off"]
    }
}