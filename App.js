import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './Home';
import Help from './Help';

import Actions from './Actions';
import InterFacts from './InterFacts';

import Login from './Login';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import { createSwitchNavigator } from 'react-navigation';

var AppNavigator = createSwitchNavigator({
  Login: Login,
  Home: Home,
  Actions: Actions,
  Facts: InterFacts,
  Help: Help,
  Profile: Profile,
});

const AppDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: Profile,
  },
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },

  Actions: {
    screen: Actions,
  },

  Facts: {
    screen: InterFacts,
  },
  Help: {
    screen: Help,
  },
});

export default createAppContainer(AppDrawerNavigator, AppNavigator);
