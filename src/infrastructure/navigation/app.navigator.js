import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tab.navigator';
import Login from '../../screens/Login/Login.screen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={'Home'} component={TabNavigator} /> */}
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
};
