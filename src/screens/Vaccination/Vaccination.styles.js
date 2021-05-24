import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Text} from '../../components/common/Typography/Text.component';
import {Tab, Tabs} from 'native-base';
import {View} from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HeaderWrapper = styled(View)``;

export const TabsWrapper = styled(Tabs)`
  margin-bottom: ${hp('2%')}px;
`;

export const CustomTab = styled(Tab)`
  height: ${hp('7%')}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ActionSheetText = styled(Text)`
  color:${({color, theme}) => (color ? color : theme.colors.text.primary)}
  padding: 10px;
  margin: 5px;
  border-bottom-width: .5px;
  border-bottom-color: ${props =>
    props.color ? props.color : props.theme.colors.text.secondary};
    opacity:.6;
  width: ${wp('43%')}px;
`;

export const ButtonContainer = styled.View`
  margin-vertical: ${hp('2%')}px;
`;

export const Selector = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.bg.primary};
`;
