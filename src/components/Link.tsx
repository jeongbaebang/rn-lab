import React, { ComponentType } from 'react'
import { Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { RootStackParamList, ScreenList } from '../screens/type'

type ComponentProps<P> = P & JSX.IntrinsicAttributes

const Link = <P, L extends ScreenList>(
  Component: ComponentType<P>,
  link: L,
  screenParams?: RootStackParamList[L],
) => {
  return function HOC_Link(props: ComponentProps<P>) {
    const navigation = useNavigation()
    const navigateToScreen = () => {
      // @ts-ignore
      navigation.navigate(link, screenParams)
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
