module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:  {
      colors:{
        gray:{
          textGray:'#65676D',
          main:'#F1F0ED',
          dark:'#8E8F93',
          light:'#9A9EAC'
        },
        orange:{
          main:'#FD7B38',
          light:'#FFE9DE'
        },
        black:{
          main:'#1E2538'
        }

      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "850px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "550px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
