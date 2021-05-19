import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ToggleTheme = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp('3%')}px;
`;
