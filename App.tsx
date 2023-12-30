import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './src/themes/light';
import dark from './src/themes/dark';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import { useAppStore } from './src/store';

export default function App() {
  const theme = useAppStore(state => state.theme);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Router />
      </ThemeProvider>
    </NavigationContainer>
  );
}
