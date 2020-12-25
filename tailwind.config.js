const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		// './public/index.html',
		// './src/**/*.html',
		// './src/**/*.jsx',
		// './src/**/*.js',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...colors,
				// gray: colors.coolGray,
				// blue: colors.lightBlue,
				// red: colors.rose,
				// pink: colors.fuchsia,
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
