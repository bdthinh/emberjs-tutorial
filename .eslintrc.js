/* eslint-disable immutable/no-mutation */

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'import',
    'promise',
    'prettier',
    'immutable',
  ],
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
  },
  rules: {
    'import/no-unresolved': [
      2,
      { ignore: [
        '^\ember',
        '^\@ember',
        'htmlbars-inline-precompile',
      ] },
    ],
    'no-underscore-dangle': 0,
    'func-names': 0,
    'dot-notation': 0,
    'object-curly-newline': 0,
    'no-template-curly-in-string': 0,
    eqeqeq: 0,
    'max-len': [2, 120, 2, { ignoreUrls: true }],
    'linebreak-style': 0,
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'immutable/no-let': 2,
    'immutable/no-mutation': 0,
    'import/named': 2,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'new-cap': 1,
    'no-console': 1,
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-useless-escape': 0,
    'no-var': 2,
    'prefer-const': 2,
    strict: 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      // eslint-disable-next-line global-require
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      }),
    },
  ],
  settings: {
    'import/resolver': 'eslint-import-resolver-ember',
  },
};
