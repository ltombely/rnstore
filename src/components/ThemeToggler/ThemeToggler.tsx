import React, { useContext } from 'react';
import { useAppStore } from '../../store';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

export default function ThemeToggler() {
  const theme = useAppStore(state => state.theme);
  const toggleTheme = useAppStore(state => state.toggleTheme);

  const appTheme = useContext<DefaultTheme | undefined>(ThemeContext);

  return (
    <TouchableOpacity onPress={toggleTheme}>
      {theme === 'dark' ? (
        <Feather name="moon" size={32} color={appTheme?.colors.text} />
      ) : (
        <Feather name="sun" size={32} color={appTheme?.colors.text} />
      )}
    </TouchableOpacity>
  );
}
