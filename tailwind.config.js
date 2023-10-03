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
        'betgrid_main': '250px minmax(300px, 1fr) 250px',
        'betgrid_1': '100px minmax(300px, 1fr)',
        'betgrid_2': '1fr 2fr 2fr',
        'betgrid_3': 'minmax(90px, 2fr) 1fr',
      },
    },
  },
  plugins: [],
}
