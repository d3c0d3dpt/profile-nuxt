module.exports = {
    root: true,

    env: {
        browser: true,
        node: true
    },

    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],

    // add your custom rules here
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false
        }],

        semi: [2, 'always'],

        'max-len': ['error', { code: 120 }],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-const-assign': 'error',

        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' }
        ],

        'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }]
    }
};
