import {Card} from 'native-base';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const VaccineCard = styled(Card)`
  padding: ${wp('3%')}px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const DateContainer = styled.TouchableOpacity`
  margin-bottom: ${hp('1%')}px;
  background-color: ${props =>
    props.active ? props.theme.colors.ui.primary : 'transparent'};
  border-radius: 5px;
  padding-horizontal: ${wp('1.5%')}px;
  padding-top: ${hp('.3%')}px;
  justify-content: center;
  align-items: center;
`;

export const CapacityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Booked = styled.View`
  background-color: ${props => props.theme.colors.ui.error};
  border-radius: 5px;
  padding-horizontal: ${wp('1%')}px;
  padding-top: ${hp('.2%')}px;
  justify-content: center;
  align-items: center;
`;

export const NotifyMe = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.ui.error};
  border-radius: 5px;
  padding: ${wp('2%')}px;
  justify-content: center;
  align-items: center;
`;
