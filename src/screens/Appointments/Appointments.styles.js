import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Text} from '../../components/common/Typography/Text.component';
import {Tab, Tabs} from 'native-base';
import {View} from 'react-native';
import {Card} from 'native-base';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HeaderWrapper = styled(View)`
`;

export const TabsWrapper = styled(Tabs)`
  margin-bottom: ${hp('2%')}px;
`;

export const CustomTab = styled(Tab)`
  height: ${hp('7%')}px;
  display: flex;
  flex-direction: row;
`;

export const ListWrapper = styled(View)`
  display: flex;
  margin-bottom: ${hp('2%')}px;
`;

export const ListRow = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: ${hp('2%')}px;
`;

export const Listcolumn = styled(View)`
  width: ${props => (props.width ? props.width : '50%')};
  flex-direction: column;
`;

export const ListItemDateText = styled(Text)`
  height: ${wp('23%')}px;
`;

export const ListItemText = styled(Text)`
  margin-bottom: ${hp('2%')}px;
`;

export const ListItemCard = styled(Card)`
  margin-left: ${wp('2%')}px;
  margin-right: ${wp('2%')}px;
  height: ${wp('20%')}px;
  width: ${wp('55%')}px;
  padding: ${wp('1%')}px;
`;

export const HospitalNameText = styled(Text)`
`;

export const AddressText = styled(Text)`
`;
