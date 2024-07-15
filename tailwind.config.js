/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Helvetica: ["HelveticaNeue"],
        neue: ["Helvetica Neue", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "12px",
          xl: "12px",
        },
        center: true,
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      boxShadow: {
        custom: "0px 2px 48px 0px #00000014",
        custom2: "0px 0px 20px 1px #ffffff",
        custom3: "0px 0px 0px 4px #ffffff",
        "5xl": "0px 0px 15px 0px #0C5FD1 inset",
      },
      colors: {
        gradient1: "linear-gradient(107.9deg, #0c5fd1 1.25%, #8703c5 93.71%)",
        purple: "#9800B0",
        orange: "#F77B0B",
        lightBlue: "#003E9233",
        darkBlue: "#003E92",
        blue: "#F5FAFF",
        lightBlue2: "#F2F8FF",
        lightBlue3: "#FFFFFF26",
      },
      backgroundImage: {
        "gradient-to-custom":
          "linear-gradient(107.9deg, #0c5fd1 1.25%, #8703c5 93.71%)",
        "header-bg": `url(./assets/img/png/header-bg.png)`,
        "conversation-bg": `url(./assets/img/png/conversation.webp)`,
        "ring-bg": `url(./assets/img/png/ring-bg.webp)`,
        "over-ex": `url(./assets/img/png/over-with-ex.webp)`,
        layer: `url(./assets/img/png/footer-layer.webp)`,
        request: `url(./assets/img/png/Request-bg.webp)`,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient": {
          borderImageSlice: "10 !important",
          borderImageSource:
            "linear-gradient(107.9deg, #0c5fd1 1.25%, #8703c5 93.71%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
