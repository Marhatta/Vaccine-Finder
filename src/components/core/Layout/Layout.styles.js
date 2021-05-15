import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;
