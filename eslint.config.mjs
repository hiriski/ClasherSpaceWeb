import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = defineConfig([...compat.extends('next/core-web-vitals', 'next/typescript')], {
  rules: {
    'prefer-const': 'error',
    'max-len': ['warn', { code: 120 }],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
  },
})

export default eslintConfig
