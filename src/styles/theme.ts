import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {    
    gray: {
      '100': '#e1e1e6',
      '300': '#a8a8b3',
      '500': '#646478',
      '700': '#2b2b3f',
      '800': '#29292e',      
      '850': '#202024',
      '900': '#1a1a1e',
      '950': '#121214',
    },
    purple: {
      "500": "#8769b3",
      "600": "#6d4f9c",
      "700": "#5b3a87",
      "800": "#4a2d6f",
      "900": "#3a1d57",
    },
    yellow: {
      "500": "#f9d851",
      "600": "#f7c945",
      "700": "#f5b83f",
      "800": "#f3a036",
      "900": "#f18d30",
    },
    blue: {
      "500": "#4a90e2",
      "600": "#3a7adc",
      "700": "#2a5cc5",
      "800": "#1a3faf",
      "900": "#0a2a9a",
    }
  }, 

  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  styles: {
    global: {
      body: {
        bg: '#f5f5f5',
        color: 'gray.500',
      }
    }
  }
});