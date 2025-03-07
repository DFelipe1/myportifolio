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
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    fonts: {
        jetbrains_mono: `${jetBrainsMono.style.fontFamily}, monospace`,
        inter: `${inter.style.fontFamily}, sans-serif`
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
});