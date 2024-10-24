/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    env: { browser: true },
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['react-refresh', 'eslint-comments'],
    rules: {
        'import/order': 'error',
    },
}
