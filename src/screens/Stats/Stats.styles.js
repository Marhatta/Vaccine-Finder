import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const StatsCard = styled.View`
  width: ${wp('90%')}px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${hp('2%')}px;
`;

export const CardCustomeColumn = styled.View`
  text-align: left;
  width: ${props => props.width};
`;

export const ChartContainer = styled.View`
  margin-top: ${hp('2%')}px;
  padding: 12px;
`;
