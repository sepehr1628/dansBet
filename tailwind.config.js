module.exports = {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6F00FF",
        "dark-gray": "#1E1E1E",
      },
      screens: {
        sm: "560px",
        md: "768px",
        xlg: "992px",
        lg: "1024px",
        xl: "1200px",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(270deg, rgba(111,0,255,0.4) 60%, rgba(111,0,255,0.55) 80%, rgba(111,0,255,1) 100%)",
        "gray-gradient":
          "linear-gradient(270deg, rgba(30,30,30,1) 71%, rgba(30,30,30,0.9332983193277311) 80%, rgba(30,30,30,0.8464635854341737) 100%)",
      },
    },
  },
  plugins: [],
};
