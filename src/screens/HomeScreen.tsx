import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

import useTheme from '../theme/useTheme'
import { ScreenProps } from './type'

const HomeScreen = (_props: ScreenProps) => {
  const { theme, isDarkMode, toggleDarkMode } = useTheme()

  return (
    <View
      style={[
        styles.homeScreen,
        {
          backgroundColor: theme.color.background.primary,
        },
      ]}>
      <Text>Home Screen</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <Text>현재 모드: {isDarkMode ? 'dark' : 'light'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default HomeScreen
