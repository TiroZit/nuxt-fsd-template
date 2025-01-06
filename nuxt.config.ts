// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2025-01-05',
	srcDir: 'src/',

	dir: {
		assets: 'app/assets',
		public: 'app/public',
		layouts: 'app/layouts',
		pages: 'app/providers/router/routes',
		middleware: 'app/providers/router/middleware',
	},

	components: {
		dirs: [],
	},
	imports: {
		autoImport: false,
		scan: false,
	},

	modules: ['@nuxt/eslint'],
});
