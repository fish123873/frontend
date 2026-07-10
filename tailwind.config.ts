import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C4714A',
          dark: '#9E5638',
          light: '#D9957A',
        },
        gold: {
          DEFAULT: '#C9A962',
          light: '#E2CC96',
          dark: '#A88940',
        },
        authority: {
          DEFAULT: '#2C4A6E',
          light: '#3D6494',
        },
        cream: '#FAF7F2',
        azur: {
          DEFAULT: '#4A90A4',
          light: '#6BAFC2',
        },
        sage: {
          DEFAULT: '#7A9E8E',
          light: '#9DBDAF',
        },
        charcoal: '#2D2926',
        muted: '#6B6560',
        'trust-green': '#3D7A5F',
        coral: '#D4847A',
        success: '#3D7A5F',
        error: '#C0392B',
      },
      fontFamily: {
        arabic: ['var(--font-arabic)', 'sans-serif'],
        latin: ['var(--font-latin)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(45, 41, 38, 0.08)',
        elevated: '0 8px 32px rgba(45, 41, 38, 0.14)',
        modal: '0 24px 64px rgba(45, 41, 38, 0.2)',
        cta: '0 4px 20px rgba(196, 113, 74, 0.4)',
      },
      borderRadius: {
        '2xl': '16px',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}

export default config
