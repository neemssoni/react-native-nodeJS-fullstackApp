import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from '/Users/neelamsoni/crackIt/crackIt/src/screen/HomeScreen/index';
//import ContentScreen from '/Users/neelamsoni/crackIt/crackIt/src/screen/ContentScreen/index';
import Stack from '/Users/neelamsoni/crackIt/crackIt/src/config/stack';

export const Tab = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
    },
    Stack: {
      screen: Stack,
    }
  }, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: "#2EC4B6",
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 22,
        padding: 12
      }
    }
  });

