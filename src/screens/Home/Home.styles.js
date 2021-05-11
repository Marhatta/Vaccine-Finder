import styled from 'styled-components/native';
import {Thumbnail} from 'native-base';
import {Swiper} from '../../components/common/Swiper/Swiper.component';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const HeaderContainer = styled.View`
  position: absolute;
  width: ${wp('100%')}px;
  padding: ${props => props.theme.space[3]};
  z-index: 9;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InnerContainer = styled.ScrollView`
  margin: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[5]};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[3]};
  margin-top: ${props => props.theme.space[3]};
`;

export const ImageSwiper = styled(Swiper).attrs({})`
  height: ${hp('60%')}px;
  border-bottom-left-radius: 25px;
`;

export const ImageCard = styled.Image`
  width: ${wp('80%')}px;
  height: ${hp('25%')}px;
`;

export const TestimonialBackgroundImage = styled.ImageBackground`
  width: ${wp('80%')}px;
  height: ${hp('25%')}px;
  margin-right: ${props => props.theme.space[3]};
`;

export const TestimonialContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RowSpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Review = styled.View`
  width: ${wp('52%')}px;
  text-align: justify;
`;

export const UserAvatar = styled(Thumbnail)`
  border-radius: 12px;
`;
