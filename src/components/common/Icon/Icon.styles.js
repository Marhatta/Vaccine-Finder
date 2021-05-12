import styled from 'styled-components/native';
import {Icon} from 'native-base';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const CustomIcon = styled.Image`
  width: ${({width}) => (width ? width : `${hp('3%')}px`)};
  height: ${({height}) => (height ? height : `${hp('3%')}px`)};
`;

export const CustomTouchable = styled.TouchableOpacity`
  z-index: 999;
`;

export const CustomNativeBaseIcon = styled(Icon)`
  color: ${props =>
    props.color ? props.color : props.theme.colors.ui.tertiary};
  font-size: ${props => (props.fontSize ? props.fontSize : 20)}px;
`;
