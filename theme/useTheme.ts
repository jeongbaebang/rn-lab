import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useAppRedux';
import {toggleDarkMode} from './themeSlice';

/**
 * 디자인 시스템 훅
 *
 * 다크모드와 라이트모드에 맞게 자동변환 기능을 제공
 */
function useTheme() {
  const dispatch = useAppDispatch();
  const {isDarkMode, styleSystem} = useAppSelector(state => state.theme);
  const mode = isDarkMode ? 'dark' : 'light';
  const dispatchToggleDarkMode = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return {
    toggleDarkMode: dispatchToggleDarkMode,
    isDarkMode: isDarkMode,
    font: styleSystem.font,
    color: styleSystem.color[mode],
  };
}

export default useTheme;
