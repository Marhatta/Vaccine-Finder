import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import {NativeBaseIcon} from '../../common/Icon/Icon.component';
import {Text} from '../../common/Typography/Text.component';
import {Container, Left, Right} from './Header.styles';

export const Header = ({
  navigation,
  title,
  leftContent,
  centerContent,
  rightContent,
}) => {
  const theme = useTheme();
  return (
    <Container>
      <Left>{leftContent ? leftContent : <View />}</Left>
      {centerContent ? centerContent : <Text variant="label">{title}</Text>}
      <Right>
        {rightContent ? (
          rightContent
        ) : (
          <NativeBaseIcon
            name="setting"
            type="AntDesign"
            color={theme.colors.text.secondary}
          />
        )}
      </Right>
    </Container>
  );
};
