/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "2px 5px 10px 0px #0000001A", 
      },
      colors: {
        sidebg: '#F2EAE1',
        maincolor:'#FEAF00'
      },
    },
  },
  plugins: [],
}

