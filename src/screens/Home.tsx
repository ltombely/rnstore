import React from 'react';
import { Container, Text, Logo, Title } from '../styles/global.styles';
import logo from '../assets/logo_transparent.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <Container>
      <Header />
      <Title>Welcome to React Native Store!</Title>
      <Logo source={logo} resizeMode="contain" />
      <Text>HomeScreen</Text>
      <Footer />
    </Container>
  );
}
