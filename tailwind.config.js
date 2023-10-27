/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'betgrid_main': '250px minmax(700px, 1fr) 300px',
        'betgrid_1': '70px minmax(300px, 1fr)',
        'betgrid_2': '0.5fr 2fr 2fr',
        'betgrid_2_r': '1fr 1fr 1fr',
        'betgrid_3': 'minmax(50px, 1fr) 10px',
      },
      gridTemplateRows: {
        'betgrid_2_r': '1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}
