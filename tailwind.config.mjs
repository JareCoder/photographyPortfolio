/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'josefin': ['"Josefin Sans Variable"', "sans-serif"],
				'jost': ['"Jost Variable"', "sans-serif"]
			},
			objectPosition: {
				'top-33': 'center top 33.33%',
				'top-50': 'center top 50%',
			},
			backgroundPosition: {
				'center-33': 'center 33.33%',
			},
			backgroundSize: {
				'size-66': '100% 66.67%'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: "class",
}
