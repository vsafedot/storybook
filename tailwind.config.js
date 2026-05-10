/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },

      colors: {
        /* FlexPrice brand palette */
        primary: {
          DEFAULT: '#3293D9',
          50:  '#EFF7FE',
          100: '#DAEEFB',
          200: '#ADDBF6',
          300: '#7CC5F1',
          400: '#4AAEE9',
          500: '#3293D9',
          600: '#2680C2',
          700: '#1D6094',
          800: '#164870',
          900: '#0F2F4C',
        },

        /* Status colors (semantic) */
        success: {
          DEFAULT: '#22C55E',
          bg: '#F0FDF4',
          text: '#16A34A',
          border: '#86EFAC',
        },
        warning: {
          DEFAULT: '#F59E0B',
          bg: '#FFFBEB',
          text: '#B45309',
          border: '#FCD34D',
        },
        danger: {
          DEFAULT: '#EF4444',
          bg: '#FEF2F2',
          text: '#B91C1C',
          border: '#FCA5A5',
        },
        info: {
          DEFAULT: '#0EA5E9',
          bg: '#F0F9FF',
          text: '#0369A1',
          border: '#7DD3FC',
        },

        /* Sidebar */
        sidebar: {
          DEFAULT: '#0F172A',
          active: '#1E293B',
          foreground: '#CBD5E1',
          'active-text': '#FFFFFF',
        },

        /* Semantic neutrals */
        background: '#F1F5F9',
        foreground: '#0F172A',
        muted: {
          DEFAULT: '#94A3B8',
          foreground: '#64748B',
        },
        border: '#E2E8F0',
      },

      borderRadius: {
        DEFAULT: '0.375rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },

      boxShadow: {
        card: '0px 1px 3px rgba(15, 23, 42, 0.04), 0px 4px 12px rgba(15, 23, 42, 0.06)',
        'card-hover': '0px 4px 16px rgba(15, 23, 42, 0.10), 0px 8px 24px rgba(15, 23, 42, 0.07)',
        modal: '0px 16px 48px rgba(15, 23, 42, 0.14), 0px 4px 12px rgba(15, 23, 42, 0.08)',
        'blue-glow': '0 0 0 3px rgba(50, 147, 217, 0.15)',
        'blue-glow-lg': '0 0 0 4px rgba(50, 147, 217, 0.20), 0 4px 16px rgba(50, 147, 217, 0.25)',
        input: '0 1px 3px rgba(15, 23, 42, 0.04)',
        primary: '0 2px 8px rgba(50, 147, 217, 0.35)',
        'primary-lg': '0 4px 16px rgba(50, 147, 217, 0.45)',
      },

      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(12px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'ping': {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },

      animation: {
        shimmer: 'shimmer 1.8s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease',
        'fade-in-up': 'fade-in-up 0.25s ease',
        'slide-in': 'slide-in-right 0.2s ease',
        'scale-in': 'scale-in 0.15s ease',
        spin: 'spin 0.7s linear infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        'ping': 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      spacing: {
        4.5: '1.125rem',
        18: '4.5rem',
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #3EA3E8 0%, #2B82C4 100%)',
        'sidebar-gradient': 'linear-gradient(180deg, #0F172A 0%, #111827 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFBFF 100%)',
        'header-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
