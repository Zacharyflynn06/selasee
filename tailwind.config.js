/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					red: '#EF3340',
					grey: '#212121',
				}
			}
		}
	},
	plugins: []
};
