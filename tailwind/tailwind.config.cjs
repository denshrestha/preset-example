/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors,
    fontFamily: {
      main: [
        'Manrope',
        'sans-serif'
      ]
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800'
    },
    boxShadow: {
      none: 'none',
      DEFAULT: '0px 6px 20px -6px rgba(15, 15, 15, 0.06)',
      inverted: '0px -6px 20px -6px rgba(15, 15, 15, 0.06)',
      card: '0px 40px 32px -32px rgba(15, 15, 15, 0.16)',
      plan: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
      message: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      'input-hover': '0px 12px 16px -16px rgba(15, 15, 15, 0.16)',
      'primary-hover': '0px 8px 16px rgba(165, 207, 76, 0.5)',
      'primary-pressed': '0px 8px 16px rgba(165, 207, 76, 0.15), inset 0px 0px 6px #024242',
      'secondary-hover': '0px 8px 16px rgba(2, 66, 66, 0.12)'
    },
    dropShadow: {
      plan: '0px 6px 20px rgba(15, 15, 15, 0.06)'
    },
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      md: ['20px', '28px'],
      xl: ['32px', '40px'],
      '2xl': ['36px', '44px'],
      '3xl': ['40px', '48px'],
      '4xl': ['44px', '52px'],
      '5xl': ['48px', '56px'],
      '6xl': '56px',
      subheading: ['24px', {
        lineHeight: '30px',
        fontWeight: '700'
      }],
      heading: ['28px', {
        lineHeight: '34px',
        fontWeight: '700'
      }]
    },
    minHeight: {
      plans: '550px'
    },
    extend: {
      spacing: {
        4.5: '18px',
        7.5: '30px',
        18: '4.5rem',
        76: '300px',
        'sidebar-opened': '260px',
        'sidebar-closed': '100px'
      },
      borderRadius: {
        card: '10px'
      },
      screens: {
        xs: '550px',
        sm: '768px',
        '3xl': '2044px'
      },

      maxHeight: (theme) => ({
        ...theme('spacing')
      }),
      maxWidth: (theme) => {
        return {
          ...theme('spacing')
        }
      },
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      minWidth: (theme) => ({
        ...theme('spacing')
      })
    }

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries')
  ]
}
