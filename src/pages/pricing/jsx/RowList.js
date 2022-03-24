// styles
import { styled } from '@site/src/styles/snippets'


const RowList = styled.ul(theme => ({

  borderBottom: `solid 1px rgba(255,255,255, .1)`,
  '& > li': {
    padding: theme.spacing(1.5, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '&:nth-child(1)': {
      fontWeight: 400,
    },
    '&:nth-child(n+2)': {
      alignItems: 'center',
    },

    '&:nth-child(3)': {
      border: `solid 1px rgba(255,255,255, .1)`,
      borderTop: 0,
      borderBottom: 0,
      backgroundColor: 'rgba(255,255,255, .05)',
    },

  },
  '& small': {
    display: 'block',
    opacity: .7,
    fontSize: '.8rem',
  }

}))

export default RowList