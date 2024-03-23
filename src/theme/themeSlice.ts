import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Appearance, ColorSchemeName } from 'react-native'
import styleSystem, { Style } from './style'

export type ColorScheme = 'light' | 'dark'

type ThemeState = {
  isSystemColorScheme: boolean
  localColorScheme: ColorScheme
  styleSystem: Style
}

const initialColorScheme = Appearance.getColorScheme()
const initialState: ThemeState = {
  isSystemColorScheme: true,
  localColorScheme: initialColorScheme || 'light',
  styleSystem: styleSystem,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateLocalColorScheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.localColorScheme = action.payload || 'light' // 기본값 지정
    },
    onSystemColorScheme: (state) => {
      state.isSystemColorScheme = !state.isSystemColorScheme
    },
  },
})

export const { onSystemColorScheme, updateLocalColorScheme } =
  themeSlice.actions

export default themeSlice.reducer
