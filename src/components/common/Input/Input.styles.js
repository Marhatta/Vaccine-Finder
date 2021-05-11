import styled from 'styled-components/native';
import {Label} from 'native-base';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const PinpoinxLabel = styled(Label)`
  font-family: Roboto-Bold;
  color: ${props =>
    props.color ? props.color : props.theme.colors.text.secondary};
  font-size: ${({fontSize}) => (fontSize ? fontSize : `${hp('1.8%')}px`)};
`;
