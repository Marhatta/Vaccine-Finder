import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Divider} from '../../common/Divider/Divider.component';
import {Icon} from '../../common/Icon/Icon.component';
import {Text} from '../../common/Typography/Text.component';
import {Container, Left, Right} from './Header.styles';

export const Header = ({
  navigation,
  title,
  leftContent,
  centerContent,
  rightContent,
}) => {
  return (
    <>
      <Container>
        <Left>
          {leftContent ? (
            leftContent
          ) : (
            <Icon
              source={require('../../../assets/icons/menuBlack.png')}
              width={`${hp('4%')}px`}
              height={`${hp('4%')}px`}
              onPress={() => navigation.openDrawer()}
            />
          )}
        </Left>
        {centerContent ? centerContent : <Text variant="label">{title}</Text>}
        <Right>
          {rightContent ? (
            rightContent
          ) : (
            <Icon
              source={require('../../../assets/icons/notifyBlack.png')}
              width={`${hp('4%')}px`}
              height={`${hp('4%')}px`}
            />
          )}
        </Right>
      </Container>
      <Divider />
    </>
  );
};
