/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		colors: {
			text: "#8C8C8C",
			dark: "#262626",
			gray: "#EEEEEE",
			"gray-light": "#FAFAFA",
			"gray-border": "#F2F2F2",
			white: "#ffffff",
			red: "#F42222",
			green: "#22C55E",
			pink: "#FC6363",
		},
		extend: {},
	},
	plugins: [],
};
