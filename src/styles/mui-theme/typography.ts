import { ThemeOptions } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const heading: TypographyStyleOptions = {
  fontFamily: ['Nunito Sans', ...systemFont].join(','),
  fontWeight: 700,
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: ['Nunito Sans', ...systemFont].join(','),
  fontWeightBold: 800,
  h1: {
    ...heading,
    fontSize: 40,
  },
  h2: {
    ...heading,
    fontSize: 35,
  },
  h3: {
    ...heading,
    fontSize: 30,
  },
  h4: {
    ...heading,
    fontSize: 25,
  },
  h5: {
    ...heading,
    fontSize: 20,
  },
  h6: {
    ...heading,
    fontSize: 16,
  },
  button: {
    ...heading,
  },
  // body1: {
  //   fontSize: 18,
  //   fontWeight: 500,
  // },
  // body2: {
  //   fontSize: 16,
  //   fontWeight: 400,
  // },
  // subtitle1: {
  //   fontSize: 18,
  //   fontWeight: 500,
  // },
  // subtitle2: {
  //   fontSize: 16,
  //   fontWeight: 400,
  // },
  // fontWeightMedium: {
  //   fontWeight: 700,
  // }
};
