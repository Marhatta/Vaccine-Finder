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

export const CardCustomColumn = styled.View`
  text-align: left;
  width: ${props => props.width};
`;

export const ChartContainer = styled.View`
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2%')}px;
`;

export const VaccinationByCityUTWrapper = styled.ScrollView`
  margin-top: ${hp('2%')}px;
`;

export const VaccinationByCityUTContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${props => props.theme.space[2]};
`;

export const VaccinationByCityUTContainerStats = styled.View`
  width: ${wp('34%')}px;
  flex-direction: row;
  justify-content: space-between;
`;
