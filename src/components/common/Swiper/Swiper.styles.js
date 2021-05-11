import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const PinpoinxSwiper = styled(Swiper)``;

export const ImageContainer = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  flex: 1;
  border-bottom-left-radius: ${({imageRoundedBottom}) =>
    imageRoundedBottom ? '15px' : '0px'};
  border-bottom-right-radius: ${({imageRoundedBottom}) =>
    imageRoundedBottom ? '15px' : '0px'};
`;

export const Dot = styled.View`
  width: ${wp('1.3%')}px;
  height: ${wp('1.3%')}px;
  border-radius: 30px;
  margin: 2.5px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const ActiveInnerDot = styled.View`
  width: ${wp('1%')}px;
  height: ${wp('1%')}px;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const ActiveDot = styled.View`
  width: ${wp('2.5%')}px;
  height: ${wp('2.5%')}px;
  border-width: 1px;
  border-radius: 30px;
  margin: 2.5px;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.theme.colors.bg.primary};
`;
