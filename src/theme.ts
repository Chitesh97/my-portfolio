import { chakra, color, extendTheme, FormHelperText, withDefaultSize, type ThemeConfig } from '@chakra-ui/react';

export const theme: ThemeConfig = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  fonts: {
    heading: `'Montserrat', serif`,
    body: `'Montserrat', serif`,
  },
  semanticTokens: {
    colors: {
      "primary.text": {
        default: "#1A202C",
        _dark: "#F9FAFB",
      },
      "primary.background": {
        default: "#F9FAFB",
        _dark: "#1A202C",
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: "primary.background",
        color: "primary.text",
        transition: "background 0.2s ease-in-out",
      }
    }
  },
  components: {
    Heading: {
      baseStyle: {
        color: "primary.text",
      }
    },
    Text: {
      baseStyle: {
        color: "primary.text",
      }
    },
    FormLabel: {
      baseStyle: {
        color: "primary.text",
      }
    },
    FormHelperText: {
      baseStyle: {
        color: "primary.text",
      }
    },
    Select: {
      baseStyle: {
        field: {
          color: "primary.text",
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          color: "primary.text",
        }
      }
    },
    Button: {
      sizes: {
        // xl: {
        //   h: "56px",
        //   fontSize: "lg",
        //   px: "32px"
        // }
      }
    },
  }
});
