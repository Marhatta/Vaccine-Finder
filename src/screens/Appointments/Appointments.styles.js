import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Tab, Tabs, TabHeading, View} from 'native-base';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const CustomTabs = styled(Tabs)``;

export const CustomTab = styled(Tab)`
  height: ${hp('8%')}px;
`;
