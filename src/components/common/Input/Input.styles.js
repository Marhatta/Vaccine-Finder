import styled from 'styled-components/native';
import {Input} from 'native-base';

export const CustomInput = styled(Input)`
  color:${({color, theme}) => (color ? color : theme.colors.text.primary)}
  padding: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
`;
