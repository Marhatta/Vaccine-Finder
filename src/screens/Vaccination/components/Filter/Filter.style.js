import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const TouchableFilter = styled.TouchableOpacity`
  border-color: ${props => props.theme.colors.ui.primary};
  ${({isActive, theme}) =>
    isActive && `background-color:${theme.colors.ui.primary}`}
  border-width: 1px;
  padding-horizontal: ${wp('2%')}px;
  padding-top: ${hp('.3%')}px;
  margin-right: ${wp('3%')}px;
  margin-bottom: ${hp('1%')}px;
  border-radius: 5px;
`;
