import { color, extendTheme, withDefaultSize, type ThemeConfig } from '@chakra-ui/react';

export const theme: ThemeConfig = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  fonts: {
    heading: `'Montserrat', serif`,
    body: `'Montserrat', serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#F9FAFB',
        color: '#1A202C',
      }
    }
  },
  
});
