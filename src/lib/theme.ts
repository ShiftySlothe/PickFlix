import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        'nav-button': {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: '#2B222E',
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
      },
    },
  },
});

export default theme;
