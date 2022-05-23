// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  mode: 'jit',
  content: [
    './pages/**/*.tsx',
    './shared/components/**/*.tsx',
    './layouts/**/*.tsx',
    './lib/**/*.ts',
    './data/**/*.mdx',
    './shared/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'move-bg': {
          to: {
            backgroundPosition: '400% 0',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      animation: {
        'move-bg': 'move-bg 12s infinite linear',
        wave: 'wave 2s infinite',
        blob: 'blob 12s infinite',
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        gray: {
          DEFAULT: '#b8b3b1',
          50: '#f8f8f8',
          100: '#f1efef',
          200: '#e5e3e3',
          300: '#d3cfce',
          400: '#b8b3b1',
          500: '#9e9795',
          600: '#8e8785',
          700: '#6f6866',
          800: '#5d5857',
          900: '#514c4b',
        },
        rose: {
          DEFAULT: '#e98183',
          50: '#fcf3f2',
          100: '#fceae9',
          200: '#f8d3d3',
          300: '#f2b1b1',
          400: '#e98183',
          500: '#de545b',
          600: '#cc3342',
          700: '#a22533',
          800: '#902333',
          900: '#792030',
        },
        yellow: {
          DEFAULT: '#F3BF61',
          50: '#FFFFFF',
          100: '#FFFCF9',
          200: '#FCEDD3',
          300: '#F9DEAD',
          400: '#F6CE87',
          500: '#F3BF61',
          600: '#bf840f',
          700: '#995f0f',
          800: '#7f4c14',
          900: '#6c3e17',
        },
        teal: {
          DEFAULT: '#78d0b9',
          50: '#f2fbf8',
          100: '#d5f2e9',
          200: '#aae5d4',
          300: '#78d0b9',
          400: '#50b7a0',
          500: '#329a84',
          600: '#267b6c',
          700: '#226358',
          800: '#1f5048',
          900: '#1e433d',
        },
        primary: {
          DEFAULT: '#e98183',
          50: '#fcf3f2',
          100: '#fceae9',
          200: '#f8d3d3',
          300: '#f2b1b1',
          400: '#e98183',
          500: '#de545b',
          600: '#cc3342',
          700: '#a22533',
          800: '#902333',
          900: '#792030',
        },
        black: '#232323',
        white: '#f8f7f4',
      },
      fill: (theme) => ({
        ...theme('colors'),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'dark'],
    fill: ['hover', 'focus', 'dark'],
    animation: ['group-hover'],
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
