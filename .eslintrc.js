module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'require-jsdoc': ['error', {
      require: {
        MethodDefinition: true
      }
    }],
    'no-underscore-dangle': 'off',
    'import/no-named-as-default': 'off', // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      children: true,
    }],
  },
  overrides: [
    {
      files: ['src/redux/reducers/**/*.js'],
      rules: {
        'no-param-reassign': 'off', // for immer
      },
    },
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.dev.js'
      },
    },
  },
};
