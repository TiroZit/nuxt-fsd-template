import {
	em,
	fluid,
	percent,
} from './config/postcss/functions';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-01-05',
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts'],

	app: {
		head: {
			htmlAttrs: { lang: 'ru' },
			meta: [
				{ charset: 'UTF-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'apple-mobile-web-app-title', content: 'Nuxt' },
			],
			link: [
				// FAVICONS
				{ rel: 'shortcut icon', href: '/favicons/favicon.ico' },
				{ rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
				{ rel: 'shortcut icon', href: '/favicons/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/favicons/site.webmanifest' },
				// ========
			],
		},
	},

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

	css: ['@/shared/assets/styles/_index.sass'],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: `
						@import '@/shared/assets/styles/mixins'\n
					`,
					silenceDeprecations: ['import'],
				},
			},
		},
	},

	postcss: {
		plugins: {
			'autoprefixer': {},
			'postcss-sort-media-queries': {},
			'postcss-pxtorem': {},
			'postcss-functions': {
				functions: {
					fluid,
					em,
					percent,
				},
			},
		},
	},

	icon: {
		mode: 'svg',
		customCollections: [
			{
				prefix: 'icons',
				dir: 'src/shared/assets/icons',
			},
		],
	},

	experimental: {
		typedPages: true,
	},
});
