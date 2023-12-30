import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
  height: 7%;
  width: 100%;
  position: absolute;
  top: 0;
  padding: ${props => props.theme.spacing.sm};
`;
