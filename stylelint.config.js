module.exports = {
    extends: 'stylelint-config-sass-guidelines',

    plugins: [
        'stylelint-order'
    ],

    rules: {
        indentation: 4,

        'max-nesting-depth': 4
    }
};
