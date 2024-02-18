import { defineNuxtConfig } from 'nuxt/config';
import {
	em,
	fluid,
	percent,
} from './config/postcss/functions';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['nuxt-mongoose'],
	srcDir: 'src/',
	typescript: {
		strict: true,
	},
	vue: {
		propsDestructure: true,
	},
	css: [
		'@/app/styles/_index.sass',
	],
	postcss: {
		plugins: {
			'autoprefixer': true,
			'postcss-pxtorem': {
				propList: [
					'*',
				],
				selectorBlackList: [
					'line-height',
					'letter-spacing',
				],
			},
			'postcss-functions': {
				functions: {
					fluid,
					em,
					percent,
				},
			},
			'postcss-sort-media-queries': true,
		},
	},
	dir: {
		assets: 'app/assets',
		public: 'app/public',
		middleware: 'app/providers/router/middleware',
	},
	components: [
		{
			path: 'shared',
			extensions: ['.vue'],
			prefix: 'Shared',
		},
		{
			path: 'features',
			extensions: ['.vue'],
			prefix: 'Feature',
		},
		{
			path: 'widgets',
			extensions: ['.vue'],
			prefix: 'Widget',
		},
		{
			path: 'entities',
			extensions: ['.vue'],
			prefix: 'Entity',
		},
	],
	imports: {
		dirs: [
			'shared/**/*.ts',
			'features/**/*.ts',
			'widgets/**/*.ts',
			'entities/**/*.ts',
		],
	},
});
