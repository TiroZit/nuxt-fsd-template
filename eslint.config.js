import antfu from '@antfu/eslint-config';
import eslintFeatureSliced from '@conarti/eslint-plugin-feature-sliced';
import eslintFeatureSlicedOrder from '@conarti/eslint-plugin-feature-sliced/import-order';

export default antfu(
	{
		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},

		rules: {
			'eslint-comments/no-unlimited-disable': 'off',
			...eslintFeatureSlicedOrder.configs.recommended.rules,
			...eslintFeatureSliced.configs.rules.rules,
			'@conarti/feature-sliced/public-api': 'off',
			'@conarti/feature-sliced/absolute-relative': 'off',
		},

		plugins: {
			'@conarti/feature-sliced': eslintFeatureSliced,
		},

		// TypeScript and Vue are auto-detected, you can also explicitly enable them:
		typescript: true,
		vue: true,
		jsonc: true,
		yaml: false,

		// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
		ignores: [],
	},
);
