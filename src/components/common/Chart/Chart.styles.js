import styled from 'styled-components/native';
import {LineChart, PieChart} from 'react-native-chart-kit';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const CustomLineChart = styled(LineChart)`
  margin-left: -${wp('8%')}px;
`;

export const CustomPieChart = styled(PieChart)``;
