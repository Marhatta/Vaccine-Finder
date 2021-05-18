import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {useTheme} from 'styled-components/native';
import {StatusBarContainer} from './Statusbar.styles';

export const CustomStatusBar = () => {
  const theme = useTheme();
  return (
    <StatusBarContainer
      os={Platform.OS}
      statusBarCurrentHeight={StatusBar.currentHeight}>
      <StatusBar
        translucent
        backgroundColor={theme.colors.bg.primary}
        barStyle="light-content"
      />
    </StatusBarContainer>
  );
};
