import styled from 'styled-components/native';
import {Input} from 'native-base';

export const CustomInput = styled(Input).attrs(props => ({
  backgroundColor: props.theme.colors.bg.primary,
}))`
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.colors.text.secondary};
  color: ${props => props.theme.colors.text.secondary};
`;
