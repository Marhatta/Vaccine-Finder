import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const MarkerContainer = styled.View`
  margin-top: ${hp('3.2%')}px;
`;

export const MinValue = styled.View`
  position: absolute;
  bottom: 20px;
`;

export const MaxValue = styled.View`
  position: absolute;
  bottom: 20px;
  right: 0;
`;
