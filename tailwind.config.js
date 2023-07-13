/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1280px",
        md: "820px",
        sm: "200px",
      },
      container: {
        center: true,
        screens: {
          sm: "70.4375rem",
        },
        padding: "1rem",
      },
      fontFamily: {
        main: "Segoe UI",
      },
      colors: {
        blueAccent: "#1998DE",
        blueLight: "#F6FAFF",
        blueLight2: "#E8F5FC",
        blueLight3: "rgba(25, 152, 222, 0.05)",
        blueLight4: "rgba(25, 152, 222, 0.15)",
        white: "#FFFFFF",
        grey1: "#F8F8F8",
        grey2: "#F4F4F4",
        grey3: "#E7E7E7",
        grey4: "#686868",
        grey5: "#6C6C6C",
        grey6: "rgba(23, 23, 23, 0.03)",
        greyDark1: "#464646",
        greyDark2: "#373737",
        greyDark3: "#2C2C2C",
        greyDark4: "#222222",
        greyDark5: "#1D1D1D",
        greyDark6: "#1D1D1D",
        black: "#171717",
      },
      spacing: {
        1: ".3125rem",
        2: ".625rem",
        3: ".9375rem",
        4: "1.25rem",
        5: "1.5625rem",
        6: "1.875rem",
        8: "2.5rem",
        12: "4.375rem",
      },
      borderRadius: {
        1: ".3125rem",
        2: ".625rem",
        20: "6.25rem",
      },
    },
  },
  plugins: [],
};
