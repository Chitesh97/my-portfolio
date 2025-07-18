import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

export const theme: ThemeConfig = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  fonts: {
    heading: `'Montserrat', serif`,
    body: `'Montserrat', serif`,
  },
  colors: {
    chakra: {
      body: {
        bg: 'red.100',
      }
    }
  }
});
