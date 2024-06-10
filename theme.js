// theme.js
'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--font-iransans), Arial, sans-serif',
    h1: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    h2: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    h3: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    h4: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    h5: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    h6: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    body1: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    body2: {
      fontFamily: 'var(--font-iransans), Arial, sans-serif',
    },
    // Add other typography variants if needed
  },
});

export default theme;
