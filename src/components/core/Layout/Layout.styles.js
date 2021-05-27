import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${wp('4%')}px;
`;
