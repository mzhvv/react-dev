import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'
// import storybook from 'eslint-plugin-storybook'

export default [
  {
    ignores: [
      'dist/',
      'build/',
      'coverage/',
      '.storybook',
      '.vscode',
      '.github',
      '.nyc_output',
      '.eslintcache',
      'node_modules/',
      '*.log',
      '*.tmp',

      'src/**/*.test-d.ts',
      'src/**/*.test.ts',
      // 'src/**/*.spec.ts',
      'src/**/*.stories.tsx',
      // 'src/**/*.stories.jsx',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'react/jsx-key': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',

      ...jsxA11y.configs.recommended.rules,
    },
  },

  // игнорируется в ignores: [ ... 'src/**/*.stories.tsx', ... ]
  // {
  //   files: ['src/**/*.stories.{ts,tsx}'],
  //   ...storybook.configs['flat/recommended'],
  // },
]
