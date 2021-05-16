import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Thumbnail} from 'native-base';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const TweetContainer = styled.View`
  margin-right: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[2]};
  padding: ${props => props.theme.space[3]};
  background-color: 'rgba(52, 52, 52, 0.8)';
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const TweetImage = styled.Image`
  width: ${wp('80%')}px;
  height: ${hp('27%')}px;
  border-radius: 10px;
  margin-bottom: ${props => props.theme.space[2]};
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.theme.space[2]};
`;

export const ProfilePicture = styled(Thumbnail)`
  margin-right: ${props => props.theme.space[2]};
`;
