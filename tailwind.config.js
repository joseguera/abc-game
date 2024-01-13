/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '128': '26.5rem',
        '132': '29rem',
        '134': '32rem',
      },
      colors: {
        "card-blue": "#aee1e1",
        "card-green": "#ddffbb",
        "card-red": "#fdcedf",
        "card-yellow": "#ffffc2",
      },
      transitionDuration: {
        '5000': '5000ms',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      heading: ["cormorant", "Helvetica", "Arial"],
      body: ["Inter", "Helvetica", "Arial"],
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
    }
  },
  plugins: [],
};
