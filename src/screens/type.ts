import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined
  Settings: undefined
  Notification: {
    channel: string
  }
}

export type ScreenList = keyof RootStackParamList

export type ScreenProps = NativeStackScreenProps<RootStackParamList>

export type RootStackScreenProps<T extends ScreenList> = NativeStackScreenProps<
  RootStackParamList,
  T
>
