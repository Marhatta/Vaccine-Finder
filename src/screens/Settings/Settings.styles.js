import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Text} from '../../components/common/Typography/Text.component';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ToggleTheme = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp('3%')}px;
`;

export const Icons8Promotion = styled.View`
  flex-direction: row;
  margin-top: ${hp('3%')}px;
  justify-content: center;
`;

export const Icons8Text = styled(Text)`
  flex-direction: row;
  text-decoration: underline;
  color: blue;
  margin-left: ${wp('1%')}px;
`;
