/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      screens: {
        sm: '599px',
        md: '904px',
        lg: '1239px',
        xl: '1440px',
      },
      colors: {
        'blue': '#004AAD',
        'dark-blue': '#01193A',
        'purple': '#7e5bef',
        'melon': '#F68D7F',
        'orange': '#ff7849',
        'green': '##255F36',
        'yellow': '#FFDE59',
        'gray-dark': '#D8D8D8',
        'gray': '#8492a6',
        'gray-light': '#ECECEC',
        'black': '#000',
        'white': '#FFF',
        'body': '#1A202C'
      },
      fontFamily: {
        serif: ['Playfair Display', 'sans-serif'],
        sans: ['Montserrat', 'serif'],
      },
      extend: {
        dropShadow: { 
            'list-item': 'filter: drop-shadow(0px 5px 5px #D9D9D9);'
        },
        boxShadow: {
            'list-item': '0px 8px 16px 0px rgba(216, 216, 216, 0.15);'
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
    plugins: [],
  }
