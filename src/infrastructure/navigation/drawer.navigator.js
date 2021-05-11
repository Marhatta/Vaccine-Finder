import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SideDrawer} from '../../components/core/SideDrawer/SideDrawer.component';
import Home from '../../screens/Home/Home.screen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      openByDefault={false}
      drawerType="slide"
      drawerContent={() => <SideDrawer />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
