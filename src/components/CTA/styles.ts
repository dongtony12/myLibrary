import { styled } from '../../styles/stitches.config'

/**
 * TODO: width and height should be dynamic
 */
const CTAButtonVariants = styled('button', {
  defaultVariants: {
    size: 'large',
    type: 'primary',
  },
  variants: {
    size: {
      large: {
        fontSize: '$16',
        fontWeight: '$bold',
        width: '100%',
        height: '52px',
        px: '30px',
        py: '$14',
      },
      medium: {
        fontSize: '$14',
        fontWeight: '$bold',
        width: '70%',
        height: '52px',
        px: '$20',
        py: '$10',
      },
      small: {
        fontSize: '$14',
        fontWeight: '$bold',
        width: '50%',
        height: '52px',
        px: '$12',
        py: '$6',
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
          backgroundColor: '$white',
          borderColor: '#f53f81',
          color: '#f53f81',
        },
        '&:disabled': {
          backgroundColor: '$white',
          borderColor: '#afafaf',
          color: '#afafaf',
        },
        backgroundColor: '$white',
        borderColor: '#f53f81',
        color: '#f53f81',
      },
    },
  },
})

export const CTAButton = styled(CTAButtonVariants, {
  alignItems: 'center',
  borderRadius: '$10',
  borderStyle: 'solid',
  borderWidth: '0.1rem',
  display: 'flex',
  justifyContent: 'center',
})
