/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        sm: "640px",
        md: "768px",
        lg: "1100px",
        crd: "1200px",
      },
      fontSize: {
        font10: "0.625rem",
        font11: "0.6875rem",
        font12: "0.75rem",
        font13: "0.8125rem",
        font14: "0.875rem",
        font15: "0.9375rem",
        font16: "1rem",
        font18: "1.125rem",
        font20: "1.25rem",
        font22: "1.375rem",
        font24: "1.5rem",
        font26: "1.625rem",
        font28: "1.75rem",
        font30: "1.875rem",
        font32: "2rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          sm: "1rem",
          lg: "45px",
          xl: "5rem",
          "2xl": "13rem",
        },
      },
      backgroundImage: {
        "search-gradient":
          "linear-gradient(to right, #EBCF24 0%, #EB2F57 17%, #E91896 37%, #4C8ACB 69%, #3BBFBE 100%)",
        "deals-gradient-purple":
          "radial-gradient(circle,rgba(255, 255, 255, 0.1),#7110EB)",
        "deals-gradient-red":
          "radial-gradient(circle,rgba(255, 255, 255, 0.1),#EB481A)",
        "deals-gradient-pink":
          "radial-gradient(circle,rgba(255, 255, 255, 0.1),#EB0F97)",
      },
    },
  },
  plugins: [],
};
