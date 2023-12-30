import React from 'react';
import { HeaderContainer } from './Header.styles';
import { SmallLogo, Title } from '../../styles/global.styles';
import { useAppStore } from '../../store';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

import logo from '../../assets/logo.png';

export default function Header() {
  const theme = useAppStore(state => state.theme);
  const toggleTheme = useAppStore(state => state.toggleTheme);

  return (
    <HeaderContainer>
      <SmallLogo source={logo} resizeMode="contain" />
      <Title>RNStore</Title>
      <ThemeToggler />
    </HeaderContainer>
  );
}
