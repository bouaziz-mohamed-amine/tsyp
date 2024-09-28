/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/preline/dist/*.js'
		
	],
	theme: {
		extend: {	
			fontFamily: {
				cursive: ['Pacifico', 'cursive'], // Adding a custom cursive font
			  },
			screens: {
				
				'xs': {'max': '650px'},
				'ms':{'max':'770px'}
			  },
			  height:{
				'plus':'120%',
				'plus+':'130%'
			  }
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require('preline/plugin'),
	],
};
