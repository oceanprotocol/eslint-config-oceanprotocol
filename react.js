const base = require('./index.js')

const reactRules = {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4]
}

module.exports = {
    extends: ['standard', 'standard-react'],

    rules: Object.assign({}, base.rules, reactRules)
}
