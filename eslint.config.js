// @ts-check
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    ignores: [
      // eslint ignore globs here
      'scripts',
    ],
  },
  {
    rules: {
      // overrides
      'ts/no-var-requires': 'off',
      'ts/no-require-imports': 'off',
      'style/max-statements-per-line': 'off',
      'import/no-mutable-exports': 'off',
      'prefer-regex-literals': 'off',
      'no-cond-assign': 'off',
    },
  },
)
