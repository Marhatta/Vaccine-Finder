import styled from 'styled-components/native';

export const CustomDivider = styled.View`
  border-width: 0.5px;
  border-color: ${props => props.theme.colors.text.secondary};
  opacity: 0.3;
`;
