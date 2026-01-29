/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stripe-ish Palette
        blurple: {
          DEFAULT: '#635bff',
          dark: '#5449e7',
          light: '#7a73ff'
        },
        slate: {
          900: '#0a2540', // Deep ink color
          800: '#1a1f36',
          600: '#3c4257', // Body text
          500: '#4f566b',
          400: '#8792a2',
          200: '#e3e8ee',
          100: '#f6f9fc',
          50: '#f7f9fc',
        },
        accent: {
          teal: '#00d4ff',
          pink: '#ff4b8b',
          orange: '#ff8c37'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'stripe': '0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)',
        'stripe-sm': '0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'stripe-gradient': 'linear-gradient(108.7deg, #5352ed 1.1%, #a144eb 98.2%)',
        'mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)'
      }
    },
  },
  plugins: [],
}
