import { createStitches } from '@stitches/react';
import { JetBrains_Mono, Inter } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
  });
  
  const inter = Inter({
    subsets: ["latin"],
  });

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      AlbescentWhite50: '#faf7f2',
      AlbescentWhite100: '#eee5d4',
      AlbescentWhite200: '#e6d8c2',
      AlbescentWhite300: '#d6be9b',

      CodGray700: '#454440',
      CodGray800: '#393936',
      CodGray900: '#32322f',
      CodGray950: '#1c1c1a',

      Affair500: '#9f82ca',
      Affair600: '#8766b7',
      Affair700: '#6a4c93',
    },

    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },

    fonts: {
        jetbrains_mono: `${jetBrainsMono.style.fontFamily}, monospace`,
        inter: `${inter.style.fontFamily}, sans-serif`
    },

    fontWeights: {
      light: '300',
      regular: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    
    radii: {
      px: '1px',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      full: '99999px',
    },

    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    }
  },
});