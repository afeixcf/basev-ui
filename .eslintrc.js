// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/vue'
    ],
    // required to lint *.vue files
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
        // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        camelcase: 0,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-inner-declarations': 2,
        'no-func-assign': 2,
        'no-unreachable': 1,
        'default-case': 1,
        eqeqeq: 2,
        'no-alert': 1,
        'no-case-declarations': 2,
        'no-else-return': 1,
        'no-empty-pattern': 2,
        'no-multi-str': 2, //禁止使用多行字符串
        'no-unmodified-loop-condition': 2,
        'require-await': 2,
        'vars-on-top': 1,
        'prefer-const': 0
    }
};
