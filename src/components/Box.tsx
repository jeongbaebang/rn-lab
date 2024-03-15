import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WithLog from './Withlog'
import Link from './Link'
import { RootStackParamList, ScreenList } from '../screens/type'

const Box = ({ text }: { text: string }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxFont}>{text}</Text>
    </View>
  )
}

const theme = {
  box: {
    background: 'blue',
    font: {
      color: 'white',
    },
  },
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: theme.box.background,
    borderRadius: 8,
    height: 150,
    justifyContent: 'center',
    width: 150,
  },
  boxFont: {
    color: theme.box.font.color,
    fontSize: 18,
  },
})

export const BoxWithLog = WithLog(Box)

export const LinkToBox = <K extends ScreenList>(
  screen: K,
  Params?: RootStackParamList[K],
) => Link(Box, screen, Params)

export default Box
