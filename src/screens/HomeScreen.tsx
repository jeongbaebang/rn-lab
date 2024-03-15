import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

import useTheme from '../theme/useTheme'
import { ScreenProps } from './type'
import { LinkToBox } from '../components/Box'

/**
 * TODO
 *
 * 1. 페이지 네비게이션 HOC 구성 해보기 [v]
 */
const HomeScreen = (_props: ScreenProps) => {
  const { theme, isDarkMode, toggleDarkMode } = useTheme()
  const LinkToDetailBox = LinkToBox('Detail')
  const LinkToNotificationBox = LinkToBox('Notification')

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
      <View style={styles.boxContainer}>
        <LinkToDetailBox text="goDetail" />
        <LinkToNotificationBox text="goNotification" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    width: '100%',
  },

  homeScreen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default HomeScreen
