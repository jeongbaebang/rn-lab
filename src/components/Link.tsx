import React, { ComponentType } from 'react'
import { Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { RootStackParamList, ScreenList } from '../screens/type'

type ComponentProps<P> = P & JSX.IntrinsicAttributes

const Link = <P, K extends ScreenList>(
  Component: ComponentType<P>,
  link: K,
  screenParams?: RootStackParamList[K],
) => {
  return function HOC_Link(props: ComponentProps<P>) {
    const navigation = useNavigation()
    const navigateToScreen = () => {
      if (screenParams !== undefined) {
        // @ts-ignore
        navigation.navigate(link, screenParams)
      } else {
        // @ts-ignore
        navigation.navigate(link)
      }
    }

    return (
      <View>
        <Pressable onPress={navigateToScreen}>
          <Component {...props} />
        </Pressable>
      </View>
    )
  }
}

export default Link
