import { styled } from '../../styles/stitches.config'

const buttonVariants = styled('button', {
  defaultVariants: {
    size: 'large',
    type: 'primary',
  },

  variants: {
    size: {
      large: {
        fontSize: '$16',
        fontWeight: '$bold',
        width: '119px',
        height: '50px',
        px: '30px',
        py: '$14',
      },
      medium: {
        fontSize: '$14',
        fontWeight: '$bold',
        width: '92px',
        height: '40px',
        px: '$20',
        py: '$10',
      },
      small: {
        fontSize: '$14',
        fontWeight: '$bold',
        width: '76px',
        height: '32px',
        px: '$12',
        py: '$6',
      },
      XSmall: {
        fontSize: '$12',
        fontWeight: '$bold',
        width: '61px',
        height: '25px',
        px: '$8',
        py: '$4',
      },
    },
    type: {
      primary: {
        '&:active': {
          backgroundColor: '$main01',
          borderColor: '$main01',
          color: '$white',
        },
        '&:disabled': {
          backgroundColor: '$gray04',
          borderColor: '$gray04',
          color: '$gray06',
        },
        backgroundColor: '$main01',
        borderColor: '$main01',
        color: '$white',
      },
      secondary: {
        '&:active': {
          backgroundColor: '$gray02',
          borderColor: '#ebebeb',
          color: '$main01',
        },
        '&:disabled': {
          backgroundColor: '$gray02',
          borderColor: '#ebebeb',
          color: '$gray06',
        },
        backgroundColor: '$gray02',
        borderColor: '#ebebeb',
        color: '$main01',
      },
      territory: {
        '&:active': {
          backgroundColor: '$main03',
          borderColor: '$main01',
          color: '$main01',
        },
        '&:disabled': {
          backgroundColor: '#F5F5F5',
          borderColor: '#DFDFDF',
          color: '$gray06',
        },
        backgroundColor: '$main03',
        borderColor: '$main01',
        color: '$main01',
      },
      quaternary: {},
    },
  },
})

export const Button = styled(buttonVariants, {
  alignItems: 'center',
  borderRadius: '$10',
  borderStyle: 'solid',
  borderWidth: '0.1rem',
  display: 'flex',
  justifyContent: 'center',
})
