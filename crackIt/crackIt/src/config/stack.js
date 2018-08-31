import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DetailScreen from '/Users/neelamsoni/crackIt/crackIt/src/screen/DetailScreen/index';
import ContentScreen from '/Users/neelamsoni/crackIt/crackIt/src/screen/ContentScreen/index';

export default Stack = StackNavigator({
        Contents:{ screen:  ContentScreen},
        Details:{ screen: DetailScreen}
      });
