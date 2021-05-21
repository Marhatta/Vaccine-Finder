import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const StateContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp('1%')}px;
`;
