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

export const StatsCardColumn = styled.View``;

export const ChartContainer = styled.View`
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('3%')}px;
`;

export const ColorBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColorBox = styled.View`
  width: ${wp('3%')}px;
  height: ${wp('3%')}px;
  background-color: ${props => props.color};
  margin-left: ${wp('1%')}px;
`;

export const CardCustomeColumn = styled.View`
  text-align: left;
  width: ${props => props.width};
`;
