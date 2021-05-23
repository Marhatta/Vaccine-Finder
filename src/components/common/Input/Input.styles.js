import styled from 'styled-components/native';
import {Input} from 'native-base';

export const CustomInput = styled(Input)`
  color:${({color, theme}) => (color ? color : theme.colors.text.primary)}
  background-color:${({color, theme}) =>
    color ? color : theme.colors.bg.primary}
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
`;
