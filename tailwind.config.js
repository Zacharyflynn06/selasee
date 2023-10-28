/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					red: '#EF3340',
					grey: '#212121',
					green: 'rgba(72,154,78,1)',
					gold: 'rgba(251,206,70,1)',
					cream: '#ECE3CE'
				}
			},
			backgroundImage: {
				'gradient-green':
					'linear-gradient( 91deg,  rgba(72,154,78,1) 5.2%, rgba(251,206,70,1) 95.9% )'
			},
			fontFamily: {
				raleway: ['Raleway']
			}
		}
	},
	plugins: []
};
