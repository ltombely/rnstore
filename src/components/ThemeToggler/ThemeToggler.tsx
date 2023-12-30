import React from 'react';
import { useAppStore } from '../../store';
import { TouchableOpacity } from 'react-native';
import { Text } from '../../styles/global.styles';

export default function ThemeToggler() {
  const theme = useAppStore(state => state.theme);
  const toggleTheme = useAppStore(state => state.toggleTheme);

  return (
    <TouchableOpacity onPress={toggleTheme}>
      {theme === 'dark' ? <Text>Light</Text> : <Text>Dark</Text>}
    </TouchableOpacity>
  );
}
