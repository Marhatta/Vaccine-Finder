import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const FallbackContainer = styled.View`
  flex: 1;
  height: ${hp('50%')}px;
  justify-content: center;
  align-items: center;
`;
