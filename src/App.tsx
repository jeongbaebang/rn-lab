import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import HomeScreen from './screens/HomeScreen'
import { RootStackParamList } from './screens/type'
import List from './screens/List'
import Notification from './screens/Notification'

const Stack = createNativeStackNavigator<RootStackParamList>()

//d
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

let AppEntryPoint = App

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require('../.storybook').default
}

export default AppEntryPoint
