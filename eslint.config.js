import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import xoTypeScript from 'eslint-config-xo-typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintImport from 'eslint-plugin-import';
import eslintSortDestructure from 'eslint-plugin-sort-destructure-keys';
import prettier from 'prettier';
import reactCompiler from 'eslint-plugin-react-compiler';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended, ...xoTypeScript, eslintConfigPrettier],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'simple-import-sort': simpleImportSort,
			import: eslintImport,
			'sort-destructure-keys': eslintSortDestructure,
			prettier
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-unused-vars': 'error',
			'no-undef': 'error',
			curly: ['error', 'all'],
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
			indent: [
				'error',
				'tab',
				{
					offsetTernaryExpressions: true,
					SwitchCase: 1
				}
			],
			'no-use-before-define': 1,
			radix: ['error', 'as-needed'],
			'simple-import-sort/imports': 'error',
			'sort-destructure-keys/sort-destructure-keys': 2,
			'sort-imports': 'off'
		}
	},
	reactCompiler.configs.recommended
);
