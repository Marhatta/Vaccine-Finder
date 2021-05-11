import 'react-native-gesture-handler';
import React from 'react';
import {Platform, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {createStructuredSelector} from 'reselect';
import {PinpoinxStatusBar} from './src/components/core/StatusBar/StatusBar.component';
import {Navigation} from './src/infrastructure/navigation';
import {selectTheme} from './src/redux/app/app.selectors';
import {lightTheme} from './src/infrastructure/theme/light';
import {darkTheme} from './src/infrastructure/theme/dark';

//Enable layout animations for android
//It works by default for iOS
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const getTheme = themeName => {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};

function App({themeName}) {
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <PinpoinxStatusBar />
      <Navigation />
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  themeName: selectTheme,
});

export default connect(mapStateToProps, null)(App);
