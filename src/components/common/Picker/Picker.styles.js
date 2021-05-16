import styled from 'styled-components/native';
import {Picker} from 'native-base';

export const CustomPicker = styled(Picker)`
  height: ${props => (props.height ? props.height : 200)}px;
`;
