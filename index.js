module.exports = {
    extends: 'standard',

    rules: {
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        'space-before-function-paren': [2, { 'anonymous': 'never', 'named': 'never' }]
    }
}
