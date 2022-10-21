import { createStitches, PropertyValue } from '@stitches/react'

export const colors = {
  main01: '#FF005C',
  main02: '#4C89FF',
  main03: '#FFF9FA',

  gray01: '#9A9A9A',
  gray02: '#F8F9FB',
  gray03: '#F2F3F4',
  gray04: '#ECECEC',
  gray05: '#D9D9D9',
  gray06: '#B4B4B4',
  gray07: '#999EA5',
  gray08: '#474747',
  gray09: '#252525',
  gray10: '#000000',

  error: '#E3242B',

  black: '#000000',
  white: '#ffffff',
}

const fontSizes = {
  '28': '2.8rem',
  '24': '2.4rem',
  '20': '2rem',
  '18': '1.8rem',
  '16': '1.6rem',
  '14': '1.4rem',
  '12': '1.2rem',
  '10': '1rem',
}

const fontWeights = {
  bold: 700,
  medium: 500,
  regular: 400,
  Light: 300,
  Thin: 100,
}

const space = {
  '1': '0.1rem',
  '2': '0.2rem',
  '4': '0.4rem',
  '6': '0.6rem',
  '8': '0.8rem',
  '10': '1rem',
  '12': '1.2rem',
  '14': '1.4rem',
  '15': '1.5rem',
  '16': '1.6rem',
  '18': '1.8rem',
  '20': '2rem',
  '24': '2.4rem',
  '26': '2.6rem',
  '28': '2.8rem',
  '30': '3rem',

  mobileMax: '45rem',
  locationSearchHeaderHeight: '10rem',
  navigationHeaderHeight: '4.8rem',
  bottomNavigationHeight: '8rem',
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    space,
    sizes: space,
    radii: space,
  },
  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value,
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value,
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
