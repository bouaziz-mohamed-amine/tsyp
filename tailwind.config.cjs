/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {	
			screens: {
				
				'xs': {'max': '650px'},
				'ms':{'max':'770px'}
			  },
			  height:{
				'plus':'110%',
				'plus+':'130%'
			  }
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
