import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../Header';
import { NavigationContainer } from '@react-navigation/native';
jest.mock('../Header.styles.ts')


describe('Header', () => {
  const { findByTestId } = render(
    <NavigationContainer>
      <Header />
    </NavigationContainer>,
  );

  it('should open Drawer', () => {
    expect(findByTestId('menu')).toBeDefined();
  });
});
