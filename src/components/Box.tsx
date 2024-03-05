import { View, Text } from 'react-native'
import React from 'react'
import WithLog from './Withlog'

export default function Box({ msg }: { msg: string }) {
  return (
    <View>
      <Text>{msg}</Text>
    </View>
  )
}

export const BoxWithLog = WithLog(Box)
