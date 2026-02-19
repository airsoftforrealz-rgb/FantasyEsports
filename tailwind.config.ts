import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070f',
        surface: '#0c1121',
        card: '#11182b',
        primary: '#4f8cff',
        accent: '#21d4b4',
        danger: '#ff4f70',
        text: '#e9edf9',
        muted: '#8e9ac0'
      }
    },
  },
  plugins: [],
}

export default config
