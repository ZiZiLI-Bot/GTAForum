import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  color: {
    heading: '#E0BF5E',
  },
});

export default theme;
