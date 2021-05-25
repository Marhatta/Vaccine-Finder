import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Vaccination from '../../screens/Vaccination/Vaccination.screen';
import Notify from '../../screens/Notify/Notify.screen';

const Stack = createStackNavigator();

export const VaccinationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Vaccination'} component={Vaccination} />
      <Stack.Screen name={'Notify'} component={Notify} />
    </Stack.Navigator>
  );
};
