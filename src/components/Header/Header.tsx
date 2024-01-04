import React, { useContext } from 'react';
import { HeaderContainer } from './Header.styles';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TTheme } from '../../themes/light';

export default function Header() {
  const appTheme = useContext<TTheme>(ThemeContext as any);

  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        testID="menu">
        <Icon name="menu" size={32} color={appTheme?.colors.text} />
      </TouchableOpacity>
      <Icon name="diamond" size={32} color={appTheme?.colors.text} />
      <ThemeToggler />
    </HeaderContainer>
  );
}
