import {Card} from 'native-base';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const VaccineCard = styled(Card)`
  padding: ${wp('3%')}px;
`;
