import styled from 'styled-components/native';
import {LineChart} from 'react-native-svg-charts';
import PureChart from 'react-native-pure-chart';

export const CustomLineChart = styled(LineChart)`
  height: ${props => (props.height ? props.height : 200)}px;
`;

export const CustomPureChart = styled(PureChart)`
  height: ${props => (props.height ? props.height : 200)}px;
`;
