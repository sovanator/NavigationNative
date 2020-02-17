import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewPasswordScreen from './screens/NewPasswordScreen';
import SavedPasswordScreen from './screens/SavedPasswordScreen';

const PasswordNavigator = createStackNavigator({
  NewPassword: {
    screen: NewPasswordScreen
  },
  SavedPassword: {
    screen: SavedPasswordScreen
  },
  initialRouteName: 'NewPassword'
});

const AppContainer = createAppContainer(PasswordNavigator);

export default AppContainer;
