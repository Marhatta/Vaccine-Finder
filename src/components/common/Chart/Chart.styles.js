import styled from 'styled-components/native';
import {LineChart} from 'react-native-svg-charts';

export const CustomLineChart = styled(LineChart)`
  height: ${props => (props.height ? props.height : 200)}px;
`;
