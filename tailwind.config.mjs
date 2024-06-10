/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primay: '#1A454E',
				secondary: '#A21774',
				background: '#53A7A7',
				shadow: '#0C292F',
				white: '#ffffff',
				black: '#000000',
			},
			fontFamily: {
				text: ['Roboto-Light'],
			},
		},
	},
	plugins: [],
}
