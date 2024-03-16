import antfu from '@antfu/eslint-config';

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
		semi: true,
	},

	rules: {
		'eslint-comments/no-unlimited-disable': 'off',
	},

	// TypeScript and Vue are auto-detected, you can also explicitly enable them:
	typescript: true,
	vue: true,
	jsonc: true,
	yaml: false,

	// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
	ignores: [],
});
