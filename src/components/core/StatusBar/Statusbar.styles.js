import styled from 'styled-components/native';

export const StatusBarContainer = styled.View`
  background-color: ${props => props.theme.colors.ui.primary};
  height: ${({os, statusBarCurrentHeight}) =>
    os === 'ios' ? '35px' : `${statusBarCurrentHeight}px`};
`;
