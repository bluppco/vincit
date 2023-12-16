/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {

				"studio_feixen_sans": ["Studio Feixen Sans", "sans"]

			},
			colors: {

				"body": "#1d1d1d"

			}

		}
	},
	plugins: [],
}
