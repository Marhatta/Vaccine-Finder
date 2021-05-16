import styled from 'styled-components/native';
import {FlatList, View, Text, TouchableOpacity, Icon} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const CustomFlatList = styled(FlatList)`
  height: ${props => (props.height ? props.height : 200)}px;
  width: ${props => (props.width ? props.width : wp('90%'))}px;
`;

export const FlatListTableHeader = styled(View)`
  flexdirection: 'row';
  justifycontent: 'space-evenly';
  alignitems: 'center';
  backgroundcolor: '#37C2D0';
  bordertopendradius: 10;
  bordertopstartradius: 10;
  height: 50;
`;

export const FlatListHeader = styled(Text)`
  color: 'white';
  fontweight: 'bold';
`;

export const DirectionIcon = styled(Icon)``;

export const ColumnHeaderTouchableOpacity = styled(TouchableOpacity)`
  width: '20%';
  justifycontent: 'center';
  alignitems: 'center';
`;

export const FlatListRow = styled(View)`
  flexdirection: 'row';
  height: 40;
  alignitems: 'center';
`;

export const FirstColumnText = styled(Text)`
  width: ${props => (props.width ? props.width : wp('20%'))}px;
  textalign: 'center';
  fontweight: 'bold';
`;

export const OtherColumnText = styled(Text)`
  width: ${props => (props.width ? props.width : wp('20%'))}px;
  textalign: 'center';
`;
