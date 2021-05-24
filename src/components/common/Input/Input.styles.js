import styled from 'styled-components/native';
import {Input} from 'native-base';

export const CustomInput = styled(Input)`
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.colors.text.primary};
`;
