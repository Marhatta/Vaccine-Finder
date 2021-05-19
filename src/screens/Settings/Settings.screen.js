import React, {useState} from 'react';
import {Switch} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from 'styled-components/native';
import {ToggleTheme} from './Settings.styles';
import {Text} from '../../components/common/Typography/Text.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {showToast} from '../../components/utils/toast';
import {setTheme} from '../../redux/app/app.actions';
import {createStructuredSelector} from 'reselect';
import {selectTheme} from '../../redux/app/app.selectors';

const Settings = ({setTheme, currentTheme}) => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(
    currentTheme === 'dark' ? true : false,
  );
  const toggleSwitch = async () => {
    setTheme(isEnabled ? 'light' : 'dark');
    setIsEnabled(previousState => !previousState);
    //Store to async storage
    try {
      await AsyncStorage.setItem(
        'CovidInfo_Theme',
        isEnabled ? 'light' : 'dark',
      );
    } catch (e) {
      showToast('Something went wrong');
    }
  };
  return (
    <Layout>
      <Text variant="caption">App Settings</Text>
      <ToggleTheme>
        <Text variant="label">Switch Theme</Text>
        <Switch
          trackColor={{
            false: theme.colors.text.disabled,
            true: theme.colors.text.disabled,
          }}
          thumbColor={theme.colors.ui.secondary}
          ios_backgroundColor={theme.colors.ui.disabled}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ToggleTheme>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  currentTheme: selectTheme,
});

export default connect(mapStateToProps, {setTheme})(Settings);
