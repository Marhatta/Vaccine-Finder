import styled from 'styled-components/native';
import {CheckBox} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Text} from '../../components/common/Typography/Text.component';

export const Container = styled.View`
  flex: 1;
`;

export const ConsentContainer = styled.View`
  flex-direction: row;
  margin-vertical: ${hp('1%')}px;
  justify-content: space-between;
`;

export const ConsentCheckBox = styled(CheckBox)`
  margin-left: -${wp('2.5%')}px;
  margin-right: ${wp('2.5%')}px;
  margin-top: ${hp('.5%')}px;
  padding: 0px;
`;

export const ResponseMessageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ResponseMessage = styled(Text)`
  margin-top: ${hp('1%')}px;
`;

export const DoseContainer = styled.View`
  flex-direction: row;
  margin-vertical: ${hp('.5%')}px;
  align-items: center;
`;

export const Dose = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${wp('2%')}px;
`;
