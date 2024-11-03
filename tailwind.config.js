module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./static/**/*.js"],
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
        "audio-wide": ["Audiowide", "sans-serif"],
        "vt-323": ["VT323", "sans-serif"],
      },
    },
  },
  plugins: [],
};
