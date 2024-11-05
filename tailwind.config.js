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
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.gray[300]"),
            "--tw-prose-headings": theme("colors.gray[100]"),
            "--tw-prose-links": theme("colors.green[400]"),
            "--tw-prose-bold": theme("colors.gray[100]"),
            "--tw-prose-quotes": theme("colors.gray[100]"),
            "--tw-prose-table-borders": theme("colors.gray[700]"),
            "--tw-prose-hr": theme("colors.gray[800]"),
          },
        },
      }),
    },
  },
  plugins: [],
};
