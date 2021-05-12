import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

export const StatsCard = styled.View`
  width: ${wp('90%')}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatsCardColumn = styled.View``;

export const ChartContainer = styled.View`
  margin-top: ${hp('2%')}px;
  padding: 12px;
`;
