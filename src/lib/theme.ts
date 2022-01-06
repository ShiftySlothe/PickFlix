import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  components: {
    Button: {
      variants: {
        'nav-button': {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: 'white',
          _hover: {
            textDecoration: 'underline',
            _disabled: {
              textDecoration: 'none',
            },
          },
          _active: {
            color: '#58455E',
          },
        },
        'red-button': {
          padding: 3,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: '#e50914',
          _hover: {
            textDecoration: 'underline',
            backgroundColor: '#9b080f',
            _disabled: {
              textDecoration: 'none',
            },
          },
          _active: {
            backgroundColor: '#d60c16',
          },
        },
      },
    },
  },
});

export default theme;
