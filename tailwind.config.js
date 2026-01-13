/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Précision Africaine Palette
        'noir': {
          DEFAULT: '#1A1A1A',
          50: '#2C2C2C',
          100: '#252525',
          200: '#1F1F1F',
          300: '#1A1A1A',
          400: '#141414',
          500: '#0D0D0D',
          900: '#050505',
        },
        'ivoire': {
          DEFAULT: '#FAFAF5',
          50: '#FFFFFF',
          100: '#FDFDFB',
          200: '#FAFAF5',
          300: '#F5F5ED',
          400: '#EEEDE3',
        },
        'cuivre': {
          DEFAULT: '#B87333',
          light: '#C9884A',
          dark: '#9A5F28',
          bright: '#D4894A',
          muted: '#8B5A2B',
        },
        'charbon': '#0D0D0D',
        'cendre': '#6B6B6B',
        'argent': '#E8E8E8',
        // Legacy colors for gradual migration
        'navy': {
          DEFAULT: '#1A1A1A',
          50: '#2C2C2C',
        },
        'cream': '#FAFAF5',
        'gold': {
          DEFAULT: '#B87333',
          light: '#C9884A',
          dark: '#9A5F28',
          bright: '#D4894A',
        },
        'medical': {
          teal: '#B87333',
          'teal-light': '#C9884A',
          'teal-dark': '#9A5F28',
        },
        'luxury': {
          black: '#0D0D0D',
          gray: '#1A1A1A',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
        'body': ['DM Sans', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Editorial scale - dramatic contrasts
        'display-hero': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '400' }],
        'display-xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '400' }],
        'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'subhead': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.2em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'reveal': 'reveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'draw-line': 'drawLine 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'kuba-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23B87333' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M30 10L50 30L30 50L10 30z' fill='none' stroke='%23B87333' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E\")",
        'kuba-dense': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23B87333' stroke-width='0.5' opacity='0.08'/%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23B87333' stroke-width='0.5' opacity='0.12'/%3E%3C/svg%3E\")",
        'grid-refined': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23B87333' stroke-width='0.25' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'editorial': '0 60px 100px -40px rgba(0, 0, 0, 0.15)',
        'card': '0 20px 50px -20px rgba(0, 0, 0, 0.1)',
        'elevated': '0 30px 70px -30px rgba(0, 0, 0, 0.12)',
        'inner-glow': 'inset 0 2px 20px 0 rgba(184, 115, 51, 0.05)',
      },
    },
  },
  plugins: [],
}
