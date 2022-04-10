module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'widget-dark': '#0d1117',        
        'widget-hover': '#21262d',
        'app-dark': '#010409',
        'font-dark': '#737b84',
        'bottom-bar': '#f06d5a',
        'popup-dark': '#292a2d',
        'menu-blue': '#58a6ff',
        'search': '#1e293b',
        'search-hover': '#32333a'
      },
      borderColor: {
        'widget-color': { DEFAULT: '#30363d', dark: '#30363d' },
        'widget-hover': { DEFAULT: '#6f7780', dark: '#6f7780' },
        'popup-color': '#070809',
        'search': '#212b3c'
      },
      borderWidth: {
        'widget-1': '1px'
      },
      spacing: {
        '0.5': '0.5px',
        '98': '22rem'
      },
      fontSize: {
        'vsm': '.58rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
