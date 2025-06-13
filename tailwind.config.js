/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-mode="dark"]', "class"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        black: 'var(--black)',
        'default-text': 'var(--default-text)',
        white: 'var(--white)',
        nav: 'var(--nav)',
        'background': 'var(--background)',
        'input-background': 'var(--input-background)',
        'nav-text': 'var(--nav-text)',
        '1': 'var(--color-1)',
        '2': 'var(--color-2)',
        '3': 'var(--color-3)',
        '4': 'var(--color-4)',
        '5': 'var(--color-5)',
        '6': 'var(--color-6)',
        '7': 'var(--color-7)',
        '8': 'var(--color-8)',
        '9': 'var(--color-9)',
        '10': 'var(--color-10)',
        '11': 'var(--color-11)',
        '12': 'var(--color-12)',
        '13': 'var(--color-13)',
        '14': 'var(--color-14)',
        '15': 'var(--color-15)',
        '16': 'var(--color-16)',
        '17': 'var(--color-17)',
        '18': 'var(--color-18)',
        '19': 'var(--color-19)',
        '20': 'var(--color-20)',
        '21': 'var(--color-21)',
        '22': 'var(--color-22)',
        '23': 'var(--color-23)',
        '24': 'var(--color-24)'
      },
      fontFamily: {
        'en': ['Inter', 'sans-serif'],
        'bn': ['Li Ador Noirrit', 'sans-serif'],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
