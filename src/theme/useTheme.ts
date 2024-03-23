import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { useAppDispatch, useAppSelector } from '../hooks/useAppRedux';
import {
  ColorScheme,
  onSystemColorScheme,
  updateLocalColorScheme,
} from './themeSlice';

/**
 * `useTheme` 훅을 사용하여 애플리케이션의 테마 상태를 관리합니다.
 *
 * 이 훅은 사용자가 시스템 색상 스킴을 따르도록 설정하거나,
 * 다크 모드와 라이트 모드 사이를 수동으로 전환할 수 있는 기능을 제공합니다.
 * 또한, 현재 테마 모드(`isDarkMode`), 시스템 색상 스킴(`systemColorScheme`),
 * 사용자 지정 색상 스킴(`localColorScheme`) 및
 * 테마에 따른 글꼴 및 색상 설정(`theme`)을 반환합니다.
 *
 * @returns 훅이 반환하는 객체는 여섯 가지 주요 속성을 포함합니다:
 * - `isDarkMode`: 현재 테마 모드가 다크 모드인지 여부를 나타내는 불리언 값입니다.
 * - `isSystemColorScheme`: 시스템 색상 스킴을 사용하는지 여부를 나타내는 불리언 값입니다.
 * - `systemColorScheme`: 시스템 색상 스킴의 값을 나타냅니다 ('light' 또는 'dark').
 * - `localColorScheme`: 사용자가 수동으로 설정한 색상 스킴의 값을 나타냅니다.
 * - `updateLocalColorScheme`: 사용자가 다크 모드와 라이트 모드 사이를 전환할 수 있게 하는 함수입니다.
 *   - `colorScheme`: 'light' 또는 'dark' 값을 인자로 받습니다.
 * - `toggleSystemColorScheme`: 시스템 색상 스킴 사용 여부를 전환하는 함수입니다.
 *   - `value`: 시스템 색상 스킴을 사용할지 여부를 불리언 값으로 설정합니다.
 * - `theme`: 현재 테마 모드에 따른 글꼴과 색상 설정을 포함하는 객체입니다.
 *   - `font`: 테마에 설정된 글꼴을 나타냅니다.
 *   - `color`: 현재 테마 모드에 따른 색상을 나타냅니다.
 *
 * @example
 * // 컴포넌트 내에서 `useTheme` 훅 사용 예제
 * ```tsx
 * function App() {
 *   const { colorScheme, theme } = useTheme();
 *   const { toggleSystemColorScheme, updateLocalColorScheme, isDarkMode } = colorScheme;
 *
 *   return (
 *     <div style={{ font: theme.font, color: theme.color }}>
 *       현재 모드: {isDarkMode ? '다크 모드' : '라이트 모드'}
 *       <button onClick={() => updateLocalColorScheme(isDarkMode ? 'light' : 'dark')}>모드 전환</button>
 *       <button onClick={() => toggleSystemColorScheme(!colorScheme.isSystemColorScheme)}>시스템 색상 스킴 전환</button>
 *     </div>
 *   );
 * }
 * ```
 */

const useTheme = () => {
  const systemColorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const { localColorScheme, styleSystem, isSystemColorScheme } = useAppSelector(
    (state) => state.theme,
  );
  const dispatchColorScheme = (colorScheme: ColorScheme) => {
    dispatch(onSystemColorScheme(false));
    dispatch(updateLocalColorScheme(colorScheme));
  };
  const dispatchSystemColorScheme = (value: boolean) => {
    dispatch(onSystemColorScheme(value));
  };

  useEffect(() => {
    if (isSystemColorScheme) {
      dispatch(updateLocalColorScheme(systemColorScheme));
    }
  }, [dispatch, isSystemColorScheme, systemColorScheme]);

  return {
    colorScheme: {
      isDarkMode: localColorScheme === 'dark',
      isSystemColorScheme,
      systemColorScheme,
      localColorScheme,
      updateLocalColorScheme: dispatchColorScheme,
      toggleSystemColorScheme: dispatchSystemColorScheme,
    },
    theme: {
      font: styleSystem.font,
      color: styleSystem.color[localColorScheme],
    },
  };
};

export default useTheme;
