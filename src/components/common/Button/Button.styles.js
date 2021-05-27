import styled from 'styled-components/native';
import {Button} from 'native-base';
import {Text} from '../Typography/Text.component';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const CustomButton = styled(Button)`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  border-radius: 6px;
  height: ${hp('6%')}px;
`;

export const CustomBorderedButton = styled(Button)`
  border-width: 2px;
  border-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  border-radius: 6px;
  height: ${hp('6%')}px;
`;

export const CustomIconButton = styled(Button)`
  border-width: 1px;
  border-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  border-radius: 6px;
  padding: ${props => props.theme.space[2]};
  justify-content: space-between;
  height: ${hp('6%')}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ButtonText = styled(Text)`
  text-transform: ${({textTransform}) =>
    textTransform ? textTransform : 'uppercase'};
  color: ${props =>
    props.color ? props.color : props.theme.colors.text.primary};
`;

export const LinkButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space[2]};
`;
