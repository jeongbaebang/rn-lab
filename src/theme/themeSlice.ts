import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import styleSystem, {Style} from './style';

export interface ThemeState {
  isDarkMode: boolean;
  styleSystem: Style;
}

const initialState: ThemeState = {
  isDarkMode: Appearance.getColorScheme() === 'dark', // 초기 디바이스 상태
  styleSystem: styleSystem,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleDarkMode} = themeSlice.actions;

export default themeSlice.reducer;
