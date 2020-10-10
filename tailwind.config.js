module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing:{
        '80': '20rem'
      },
      padding: {
        '5/6': '83.333333%'
      }
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          '&:focus': {
            backgroundColor: theme('colors.gray.600'),
            borderColor: 'transparent',
            boxShadow: 'none'
          },
          borderColor: 'transparent',
          boxShadow: theme('boxShadow.default'),
          color: theme('colors.white'),
          lineHeight: theme('lineHeight.snug'),
          icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          backgroundColor: theme('colors.gray.900'),
          '&:focus': {
            backgroundColor: theme('colors.gray.700'),
            borderColor: 'transparent',
            boxShadow: 'none'
          },
          borderColor: 'transparent',
          checkedColor: theme('colors.indigo.500'),
        },
        radio: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          backgroundColor: theme('colors.gray.900'),
          '&:focus': {
            backgroundColor: theme('colors.gray.700'),
            borderColor: 'transparent',
            boxShadow: 'none'
          },
          borderColor: 'transparent',
          checkedColor: theme('colors.indigo.500'),
        }
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
