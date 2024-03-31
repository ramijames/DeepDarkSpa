/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'crt-0': '#13070D',
        'crt-1': '#5932FD',
        'crt-2': '#109C00',
        'crt-3': '#00945B',
        'crt-4': '#C81A59',
        'crt-5': '#9A14ED',
        'crt-6': '#567B07',
        'crt-7': '#B7BCB5',
        'crt-8': '#49444A',
        'crt-9': '#A077FF',
        'crt-A': '#58E302',
        'crt-B': '#2EDAA2',
        'crt-C': '#FF5F9E',
        'crt-D': '#E15AFF',
        'crt-E': '#9DC300',
        'crt-F': '#F5FBFB',
      },
    }
  },
  plugins: [],
};
