import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path, { resolve } from 'path'

export default defineConfig({
	plugins: [
		sveltekit()
	],
	resolve: {
		// alias: {
		//   "@": fileURLToPath(new URL("./src", import.meta.url)),
		//   "./runtimeConfig": "./runtimeConfig.browser",
		// },
		alias: {
			'@': path.resolve(__dirname, './src'),
			"./runtimeConfig": "./runtimeConfig.browser",
		},
	},
	server: { port: 3030}
});
