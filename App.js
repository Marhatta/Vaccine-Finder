import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Platform, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {Root} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeProvider} from 'styled-components/native';
import {createStructuredSelector} from 'reselect';
import {CustomStatusBar} from './src/components/core/StatusBar/StatusBar.component';
import {Navigation} from './src/infrastructure/navigation';
import {selectTheme} from './src/redux/app/app.selectors';
import {lightTheme} from './src/infrastructure/theme/light';
import {darkTheme} from './src/infrastructure/theme/dark';
import {showToast} from './src/components/utils/toast';
import {setTheme} from './src/redux/app/app.actions';

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

function App({themeName, setTheme}) {
  useEffect(() => {
    async function loadTheme() {
      try {
        const value = await AsyncStorage.getItem('CovidInfo_Theme');
        if (value !== null) {
          setTheme(value);
        }
      } catch (e) {
        showToast('Something went wrong');
      }
    }
    loadTheme();
  }, []);
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <CustomStatusBar />
      <Root>
        <Navigation />
      </Root>
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  themeName: selectTheme,
});

export default connect(mapStateToProps, {setTheme})(App);
