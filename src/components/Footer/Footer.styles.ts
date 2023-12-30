import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  height: 7%;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.sm};
`;