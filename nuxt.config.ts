// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2025-01-05',
	srcDir: 'src/',
	devtools: {
		enabled: true,
	},

	dir: {
		layouts: 'app/layouts',
		pages: 'app/providers/router/routes',
		middleware: 'app/providers/router/middleware',
		public: '../public',
		assets: 'shared/assets',
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
