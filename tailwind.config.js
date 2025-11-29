/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#6366F1",
          soft: "#EEF2FF",
          dark: "#4338CA"
        }
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};


