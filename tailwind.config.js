/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				pink: '#ff79c6',
				pink600: '#FE32A6',
				purple: '#bd93f9',
				purp: '#7527E2',
				comment: '#282a36',
				cyan: '#8be9fd',
				blacky: '#3B586F',
				mint: '#32FFCE'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
}
