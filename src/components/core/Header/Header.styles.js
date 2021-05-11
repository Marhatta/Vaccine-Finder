import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${hp('7%')}px;
  padding: ${props => props.theme.space[2]};
`;

export const Left = styled.View``;

export const Right = styled.View``;
