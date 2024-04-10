import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './type';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import Notification from './Notification';
import useTheme from '../theme/useTheme';
import FetchScreen from './FetchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const {
    colorScheme: { isDarkMode },
  } = useTheme();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Fetch" component={FetchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
