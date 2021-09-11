module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    plugins: [
        'immutable'
    ],
    "rules": {
        'immutable/no-mutation': 2
    }
};
