import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

// Toggle for dark & light mode
const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider>
      <ModeToggle />
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
