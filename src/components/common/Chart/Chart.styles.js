import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LineChart} from 'react-native-svg-charts';

export const CustomLineChart = styled(LineChart)`
  height: ${props => (props.height ? props.height : 200)}px;
`;

export const SubLegendContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
`;

export const SubLegendColorBox = styled.View`
  width: ${wp('3%')}px;
  height: ${wp('3%')}px;
  background-color: ${props =>
    props.color ? props.color : 'rgb(134, 65, 244)'};
  margin-left: ${wp('1%')}px;
`;
