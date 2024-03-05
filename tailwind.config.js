const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '992px',
        'lg': '1200px',
        'xl': '1400px',
        '2xl': '1920px',
      },
      backgroundColor: {
        theme: "#2A254F",
      },
      fontSize: {
        "4xl": "40px",
      },
      lineHeight: {
        "4xl": "50px",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
