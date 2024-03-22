import { View, Text, StyleSheet, Switch, useColorScheme } from 'react-native'
import React from 'react'
import useTheme from '@theme/useTheme'

const Settings = () => {
  const {
    colorScheme: {
      colorScheme,
      isDarkMode,
      isSystemColorScheme,
      onDarkMode,
      onLightMode,
      onSystemColorScheme,
    },
  } = useTheme()
  const systemColorScheme = useColorScheme()

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>시스템(네이티브) 컬러 스킴: {systemColorScheme}</Text>
        <Text>현재 컬러 스킴: {colorScheme}</Text>
        <View style={styles.switch}>
          <Text>다크 테마</Text>
          <Switch value={isDarkMode} onValueChange={onDarkMode} />
        </View>
        <View style={styles.switch}>
          <Text>라이트 테마</Text>
          <Switch value={!isDarkMode} onValueChange={onLightMode} />
        </View>
        <View style={styles.switch}>
          <Text>시스템 테마 사용하기</Text>
          <Switch
            value={isSystemColorScheme}
            onValueChange={onSystemColorScheme}
          />
        </View>
      </View>
    </View>
  )
}

const theme = {
  color: {
    background: 'white',
    shadow: '#000',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    backgroundColor: theme.color.background, // 카드 배경색
    borderRadius: 12, // 둥근 모서리
    elevation: 5, // 안드로이드용 그림자
    flex: 1,
    gap: 10,
    margin: 15,
    paddingHorizontal: 40,
    paddingVertical: 20,
    shadowColor: theme.color.shadow, // 그림자 색
    shadowOffset: {
      width: 0,
      height: 2, // 그림자 방향
    },
    shadowOpacity: 0.1, // 그림자 투명도
    shadowRadius: 8, // 그림자 블러 반경
  },

  switch: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Settings
