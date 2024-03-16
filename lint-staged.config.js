export default {
	'**/*.{vue,ts}': () => `vue-tsc --noEmit`,
	'**/*.{vue,ts,js}': filenames => `eslint ${filenames.join(' ')} --fix`,
};
