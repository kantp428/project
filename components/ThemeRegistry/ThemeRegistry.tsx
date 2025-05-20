'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from '@mui/material';

type ThemeRegistryProps = {
  children: React.ReactNode;
};

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
          },
          h2: {
            fontSize: '2rem',
            fontWeight: 600,
          },
          h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
          },
          h4: {
            fontSize: '1.25rem',
            fontWeight: 600,
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                  width: '0.4em',
                },
                '&::-webkit-scrollbar-track': {
                  background: mode === 'light' ? '#f1f1f1' : '#2e2e2e',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: mode === 'light' ? '#888' : '#666',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: mode === 'light' ? '#555' : '#888',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                boxShadow: mode === 'light' 
                  ? '0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05)' 
                  : '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: mode === 'light'
                    ? '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)'
                    : '0px 4px 8px rgba(0, 0, 0, 0.3), 0px 8px 16px rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(-2px)',
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}