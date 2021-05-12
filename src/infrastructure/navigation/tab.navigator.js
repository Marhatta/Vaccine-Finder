import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NativeBaseIcon,
  Icon,
} from '../../components/common/Icon/Icon.component';
import {Spacer} from '../../components/common/Spacer/Spacer.component';
import Home from '../../screens/Home/Home.screen';

const Tab = createBottomTabNavigator();

const StyledFloatingButton = styled.View`
  position: absolute;
  height: ${hp('12%')}px;
  width: ${hp('12%')}px;
  background-color: ${props => props.theme.colors.bg.secondary};
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;

const FloatingButton = () => {
  return (
    <StyledFloatingButton>
      <Spacer position="left">
        <Icon
          width={`${hp('10%')}px`}
          height={`${hp('10%')}px`}
          source={require('../../assets/icons/floating.png')}
        />
      </Spacer>
    </StyledFloatingButton>
  );
};

const TabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.ui.tertiary,
        inactiveTintColor: theme.colors.text.secondary,
        style: {
          backgroundColor: theme.colors.bg.secondary,
          borderTopWidth: 0,
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
        component={Home}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FloatingButton />,
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="newspaper-o" type="FontAwesome" />
            ) : (
              <NativeBaseIcon
                name="newspaper-o"
                type="FontAwesome"
                color={theme.colors.text.secondary}
              />
            ),
        }}
        name="News"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <NativeBaseIcon name="medicinebox" type="AntDesign" />
            ) : (
              <NativeBaseIcon
                name="medicinebox"
                type="AntDesign"
                color={theme.colors.text.secondary}
              />
            ),
        }}
        name="Vaccine"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
