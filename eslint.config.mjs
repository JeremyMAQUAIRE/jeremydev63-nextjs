import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Étend les configurations de Next.js et Prettier
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier'
  ),

  // Définition des règles spécifiques
  {
    rules: {
      // Permet l'utilisation de JSX dans les fichiers .tsx
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-props-no-spreading': 0,
      'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
      'react/function-component-definition': 0,
      'linebreak-style': 0,
      'no-restricted-imports': 0,
      'import/no-extraneous-dependencies': 0,
    },
  },
];

export default eslintConfig;
