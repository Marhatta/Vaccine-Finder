import styled from 'styled-components/native';
import {CheckBox} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;

export const ConsentContainer = styled.View`
  flex-direction: row;
  margin-top: ${hp('1%')}px;
  justify-content: space-between;
`;

export const ConsentCheckBox = styled(CheckBox)`
  margin-left: -${wp('2%')}px;
`;
