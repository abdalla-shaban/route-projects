/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".row": {
          display: "flex",
          flexWrap: "wrap",
          marginRight: "-0.75rem", // Adjust spacing between columns
          marginLeft: "-0.75rem",
        },
        ".col": {
          paddingRight: "0.75rem", // Adjust padding for columns
          paddingLeft: "0.75rem",
          flex: "1",
        },
        // Custom column classes for 1/12 to 12/12
        ".col-1": { flex: "0 0 8.33333%" },
        ".col-2": { flex: "0 0 16.66667%" },
        ".col-3": { flex: "0 0 25%" },
        ".col-4": { flex: "0 0 33.33333%" },
        ".col-5": { flex: "0 0 41.66667%" },
        ".col-6": { flex: "0 0 50%" },
        ".col-7": { flex: "0 0 58.33333%" },
        ".col-8": { flex: "0 0 66.66667%" },
        ".col-9": { flex: "0 0 75%" },
        ".col-10": { flex: "0 0 83.33333%" },
        ".col-11": { flex: "0 0 91.66667%" },
        ".col-12": { flex: "0 0 100%" },

        // Apply responsive column classes (sm:col-3, md:col-4, etc.)
        "@screen sm": {
          ".sm\\:col-1": { flex: "0 0 8.33333%" },
          ".sm\\:col-2": { flex: "0 0 16.66667%" },
          ".sm\\:col-3": { flex: "0 0 25%" },
          ".sm\\:col-4": { flex: "0 0 33.33333%" },
          ".sm\\:col-5": { flex: "0 0 41.66667%" },
          ".sm\\:col-6": { flex: "0 0 50%" },
          ".sm\\:col-7": { flex: "0 0 58.33333%" },
          ".sm\\:col-8": { flex: "0 0 66.66667%" },
          ".sm\\:col-9": { flex: "0 0 75%" },
          ".sm\\:col-10": { flex: "0 0 83.33333%" },
          ".sm\\:col-11": { flex: "0 0 91.66667%" },
          ".sm\\:col-12": { flex: "0 0 100%" },
        },
        "@screen md": {
          ".md\\:col-1": { flex: "0 0 8.33333%" },
          ".md\\:col-2": { flex: "0 0 16.66667%" },
          ".md\\:col-3": { flex: "0 0 25%" },
          ".md\\:col-4": { flex: "0 0 33.33333%" },
          ".md\\:col-5": { flex: "0 0 41.66667%" },
          ".md\\:col-6": { flex: "0 0 50%" },
          ".md\\:col-7": { flex: "0 0 58.33333%" },
          ".md\\:col-8": { flex: "0 0 66.66667%" },
          ".md\\:col-9": { flex: "0 0 75%" },
          ".md\\:col-10": { flex: "0 0 83.33333%" },
          ".md\\:col-11": { flex: "0 0 91.66667%" },
          ".md\\:col-12": { flex: "0 0 100%" },
        },
        "@screen lg": {
          ".lg\\:col-1": { flex: "0 0 8.33333%" },
          ".lg\\:col-2": { flex: "0 0 16.66667%" },
          ".lg\\:col-3": { flex: "0 0 25%" },
          ".lg\\:col-4": { flex: "0 0 33.33333%" },
          ".lg\\:col-5": { flex: "0 0 41.66667%" },
          ".lg\\:col-6": { flex: "0 0 50%" },
          ".lg\\:col-7": { flex: "0 0 58.33333%" },
          ".lg\\:col-8": { flex: "0 0 66.66667%" },
          ".lg\\:col-9": { flex: "0 0 75%" },
          ".lg\\:col-10": { flex: "0 0 83.33333%" },
          ".lg\\:col-11": { flex: "0 0 91.66667%" },
          ".lg\\:col-12": { flex: "0 0 100%" },
        },
        "@screen xl": {
          ".xl\\:col-1": { flex: "0 0 8.33333%" },
          ".xl\\:col-2": { flex: "0 0 16.66667%" },
          ".xl\\:col-3": { flex: "0 0 25%" },
          ".xl\\:col-4": { flex: "0 0 33.33333%" },
          ".xl\\:col-5": { flex: "0 0 41.66667%" },
          ".xl\\:col-6": { flex: "0 0 50%" },
          ".xl\\:col-7": { flex: "0 0 58.33333%" },
          ".xl\\:col-8": { flex: "0 0 66.66667%" },
          ".xl\\:col-9": { flex: "0 0 75%" },
          ".xl\\:col-10": { flex: "0 0 83.33333%" },
          ".xl\\:col-11": { flex: "0 0 91.66667%" },
          ".xl\\:col-12": { flex: "0 0 100%" },
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        // Custom container class (this will not affect the default container)
        ".tb-container": {
          width: "100%",
          paddingLeft: "1rem", // Padding on the left
          paddingRight: "1rem", // Padding on the right
          marginLeft: "auto", // Centering the container
          marginRight: "auto", // Centering the container
        },
        "@screen sm": {
          ".tb-container": {
            maxWidth: "540px", // Custom max-width for sm screens
          },
        },
        "@screen md": {
          ".tb-container": {
            maxWidth: "720px", // Custom max-width for md screens
          },
        },
        "@screen lg": {
          ".tb-container": {
            maxWidth: "960px", // Custom max-width for lg screens
          },
        },
        "@screen xl": {
          ".tb-container": {
            maxWidth: "1140px", // Custom max-width for xl screens
          },
        },
        "@screen 2xl": {
          ".tb-container": {
            maxWidth: "1320px", // Custom max-width for 2xl screens
          },
        },
      });
    },
  ],
};
