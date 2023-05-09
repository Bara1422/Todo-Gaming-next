/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        amethyst: {
          50: '#fdf6fd',
          100: '#f9ecfb',
          200: '#f3d7f7',
          300: '#ecb8ef',
          400: '#e18ee4',
          500: '#d061d4',
          600: '#bf53c1',
          700: '#973497',
          800: '#7c2c7b',
          900: '#662963',
          950: '#421040'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/Hero.jpg')",
        'contact-image': "url('/ContactImage.jpg')"
      }
    }
  },
  plugins: []
}
