/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          surface: 'var(--brand-surface)',
          'surface-elevated': 'var(--brand-surface-elevated)',
          primary: 'var(--brand-primary)',
          'primary-hover': 'var(--brand-primary-hover)',
          dark: 'var(--brand-dark)',
          'dark-surface': 'var(--brand-dark-surface)',
          muted: 'var(--brand-muted)',
          border: 'var(--brand-border)',
          'dark-border': 'var(--brand-dark-border)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 