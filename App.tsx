import React from 'react';
import {Button, StyleSheet, Text, View, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import useTheme from './src/theme/useTheme';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

function HomeScreen({navigation}: ScreenProps) {
  const {color, isDarkMode, toggleDarkMode} = useTheme();

  return (
    <View
      style={[
        styles.homeScreen,
        {
          backgroundColor: color.background.primary,
        },
      ]}>
      <Text>Home Screen</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <Text>현재 모드: {isDarkMode ? 'dark' : 'light'}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}: ScreenProps) {
  return (
    <View style={styles.detailsScreen}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  detailsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});

export default App;
