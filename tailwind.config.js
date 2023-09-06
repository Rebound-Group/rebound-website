/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      screens: {
        'xs': '1px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
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
        'gray-extra-light': '#FAFAFA',
        'black': '#000',
        'white': '#FFF',
        'body': '#1A202C'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      extend: {
        dropShadow: { 
            'list-item': 'filter: drop-shadow(0px 5px 5px #D9D9D9);'
        },
        boxShadow: {
            'list-item': '0px 8px 16px 0px rgba(216, 216, 216, 0.15);',
            'card': '0px 1.94692px 3.30977px 0px rgba(49, 49, 49, 0.02), 0px 21.02676px 13.66739px 0px rgba(49, 49, 49, 0.05), 0px 40.49598px 26.78965px 0px rgba(49, 49, 49, 0.06);'
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
