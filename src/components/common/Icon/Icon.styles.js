import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const PinpoinxIcon = styled.Image`
  width: ${({width}) => (width ? width : `${hp('3%')}px`)};
  height: ${({height}) => (height ? height : `${hp('3%')}px`)};
`;

export const PinpoinxTouchable = styled.TouchableOpacity`
  z-index: 999;
`;
