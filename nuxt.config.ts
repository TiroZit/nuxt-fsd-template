// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: 'src/',
	typescript: {
		strict: true,
	},
	vue: {
		propsDestructure: true,
	},
	dir: {
		assets: 'app/assets',
		public: 'app/public',
		layouts: 'app/layouts',
		pages: 'app/providers/router/routes',
		middleware: 'app/providers/router/middleware',
	},
	components: [
		{
			path: 'widgets',
			pathPrefix: false,
		},
		{
			path: 'features',
			pathPrefix: false,
		},
		{
			path: 'entities',
			pathPrefix: false,
		},
		{
			path: 'shared',
			pathPrefix: false,
		},
	],
	// pinia: {
	// 	storesDirs: [
	// 		'./src/widgets/**/model/*.ts',
	// 		'./src/features/**/model/*.ts',
	// 		'./src/entities/**/model/*.ts',
	// 		'./src/shared/**/model/*.ts',
	// 	],
	// },
});
