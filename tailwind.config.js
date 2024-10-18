module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#00ff00",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "system-ui"],
        "fira-code": ["Unica One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
