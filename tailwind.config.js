/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0F',
          card: '#12121A',
          cardHover: '#181824',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#F5F5F7',
          secondary: '#A1A1AA',
        },
        brand: {
          indigo: '#6366F1',
          cyan: '#22D3EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Poppins', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.25)',
        'card-glow': '0 12px 30px -10px rgba(99, 102, 241, 0.15)',
      }
    },
  },
  plugins: [],
}
