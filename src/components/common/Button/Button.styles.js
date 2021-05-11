import styled from 'styled-components/native';
import {Button} from 'native-base';
import {Text} from '../Typography/Text.component';

export const PinpoinxButton = styled(Button)`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  border-radius: 6px;
`;

export const PinpoinxBorderedButton = styled(Button)`
  border-width: 2px;
  border-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  border-radius: 6px;
`;

export const PinpoinxIconButton = styled(Button)`
  border-width: 1px;
  border-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  border-radius: 6px;
  padding: ${props => props.theme.space[2]};
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ButtonText = styled(Text)`
  text-transform: ${({textTransform}) =>
    textTransform ? textTransform : 'uppercase'};
  color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
`;
