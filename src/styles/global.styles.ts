import styled from 'styled-components/native';

// Views

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const HStack = styled.View`
  flex-direction: row;
  
`;

// Texts

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSize.xlg};
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSize.md};
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSize.lg};
`;

export const Paragrapher = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSize.md};
`;
// Inputs

export const Input = styled.TextInput``;

// Buttons

export const Button = styled.TouchableOpacity``;

// Logo

export const Logo = styled.Image`
  width: 100%;
  height: 50%;
`;

export const SmallLogo = styled.Image`
  width: 12%;
`;
