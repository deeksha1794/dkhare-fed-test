module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        "plugin:react/recommended",
        "google",
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "indent": ["warn", 4],
        "linebreak-style": 0,
        "semi": ["error", "always"],
        "no-cond-assign": ["warn", "always"],
        "no-console": "off",
        "require-jsdoc": ["warn", {
            "require": {
                "FunctionDeclaration": false,
                "MethodDefinition": false,
                "ClassDeclaration": false,
                "ArrowFunctionExpression": false,
                "FunctionExpression": false,
            },
        }],
        "react/prop-types": 0,
        "template-curly-spacing": "off",
        "max-len": ["warn", {"code": 120}],
    },
};
