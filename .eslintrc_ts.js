module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": "plugin:@typescript-eslint/recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": "off",
        "no-console": "off",
        "max-len": [
            "warn",
            {
                "code": 110,
                "tabWidth": 4,
                "ignoreUrls": true
            }
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    "globals": {
        "Common": true,
        "PROJECT_ROOT": true,
        "Action": true,
        "Logger": true,
        "Config": true,
        "ENV": true,
        "Inside": true,
        "H5": true,
        "Core": true
    }
};
