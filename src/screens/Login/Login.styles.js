import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Header, Content, Button, Label, Input} from 'native-base';

export const Container = styled.View`
  flex: 1;
`;

export const TransparentHeaderView = styled(Header)`
  flex: 1;
  color: ${props => props.theme.colors.text.tertiary};
`;

export const HeaderView = styled.View`
  background-color: white;
`;
export const HeaderTitle = styled(Text)`
  color: ${props => props.theme.colors.text.primary};
  font-size: ${hp('3%')}px;
  line-height: ${props => props.theme.lineHeights.title};
  font-family: ${props => props.theme.fonts.medium};
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.space[2]};
  text-transform: capitalize;
`;

export const HeaderDescription = styled(Text)`
  color: ${props => props.theme.colors.text.primary};
  font-size: 16px;
  line-height: 24px;
  font-family: ${props => props.theme.fonts.regular};
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  text-align: center;
`;

export const ContentContainer = styled(Content)`
  width: ${wp('100%')}px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const CustomLabel = styled(Label)`
  color: white;
  background-color: white;
`;

export const CustomInput = styled(Input)`
  color: #ffffff;
  background-color: white;
`;

export const FormContainer = styled.View`
  flex: 1;
  height: ${hp('40%')}px;
  width: ${wp('100%')}px;
  padding: ${hp('2%')}px;
  justify-content: space-between;
`;

export const BackIcon = styled(Icon)`
  z-index: 9;
`;

export const SegmentButton = styled(Button)`
  background-color: ${props => (props.active ? '#33d37c' : '#ffffff')};
  border-color: #33d37c;
  width: ${wp('40%')}px;
  justify-content: center;
  align-items: center;
`;
