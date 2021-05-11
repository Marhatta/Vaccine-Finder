import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawer.navigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
