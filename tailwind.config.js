/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    screens: {
      'm2xl': { 'max': '1536px' },
      'mxl': { 'max': '1280px' },
      'mlg': { 'max': '1024px' },
      'mmd': { 'max': '768px' },
      'msm': { 'max': '640px' },
    },
  },
  plugins: [],
};
