import React from 'react';
import {useTheme} from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseIcon} from '../../components/common/Icon/Icon.component';
import Home from '../../screens/Home/Home.screen';
import Stats from '../../screens/Stats/Stats.screen';
import TweetsScreen from '../../screens/Tweets/Tweets.screen';
import Settings from '../../screens/Settings/Settings.screen';
import {VaccinationNavigator} from './vaccination.navigator';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.ui.tertiary,
        inactiveTintColor: theme.colors.text.secondary,
        style: {
          backgroundColor: theme.colors.bg.primary,
          borderTopColor: theme.colors.bg.primary,
          height: hp('7%'),
        },
        labelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: hp('1.5%'),
        },
        labelPosition: 'below-icon',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="home" type="AntDesign" />
            ) : (
              <NativeBaseIcon
                name="home"
                type="AntDesign"
                color={theme.colors.text.secondary}
              />
            ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="stats-chart-outline" type="Ionicons" />
            ) : (
              <NativeBaseIcon
                name="stats-chart-outline"
                type="Ionicons"
                color={theme.colors.text.secondary}
              />
            ),
        }}
        name="Stats"
        component={Stats}
      />
      <Tab.Screen
        name="Vaccination"
        component={VaccinationNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="injection-syringe" type="Fontisto" />
            ) : (
              <NativeBaseIcon
                name="injection-syringe"
                type="Fontisto"
                color={theme.colors.text.secondary}
              />
            ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="twitter" type="AntDesign" />
            ) : (
              <NativeBaseIcon
                name="twitter"
                type="AntDesign"
                color={theme.colors.text.secondary}
              />
            ),
        }}
        name="Tweets"
        component={TweetsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="setting" type="AntDesign" />
            ) : (
              <NativeBaseIcon
                name="setting"
                type="AntDesign"
                color={theme.colors.text.secondary}
              />
            ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
