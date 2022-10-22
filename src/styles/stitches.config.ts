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
  '28': '28px',
  '24': '24px',
  '20': '20px',
  '18': '18px',
  '16': '16px',
  '14': '14px',
  '12': '12px',
  '10': '10px',
}

const fontWeights = {
  bold: 700,
  medium: 500,
  regular: 400,
  Light: 300,
  Thin: 100,
}

const size = {
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '12': '12px',
  '14': '14px',
  '15': '15px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '26': '26px',
  '28': '28px',
  '30': '30px',
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
    sizes: size,
    radii: size,
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
