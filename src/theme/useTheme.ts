import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useAppRedux'
import { toggleDarkMode } from './themeSlice'

/**
 * `useTheme` 훅을 사용하여 애플리케이션의 테마 상태를 관리합니다.
 *
 * 이 훅은 다크 모드와 라이트 모드 사이의 전환 기능을 제공하며,
 * 현재 테마 모드(`isDarkMode`), 테마에 따른 글꼴 및 색상 설정(`theme`)을 반환합니다.
 *
 * @returns 훅이 반환하는 객체는 세 가지 주요 속성을 포함합니다:
 * - `toggleDarkMode`: 함수를 호출하면 다크 모드와 라이트 모드 사이를 전환합니다.
 * - `isDarkMode`: 현재 테마 모드가 다크 모드인지 여부를 나타내는 불리언 값입니다.
 * - `theme`: 현재 테마 모드에 따른 글꼴과 색상 설정을 포함하는 객체입니다.
 *   - `font`: 테마에 설정된 글꼴을 나타냅니다.
 *   - `color`: 현재 테마 모드에 따른 색상을 나타냅니다.
 *
 * @example
 * // 컴포넌트 내에서 `useTheme` 훅 사용 예제
 * ```tsx
 * function App() {
 *   const { toggleDarkMode, isDarkMode, theme } = useTheme();
 *
 *   return (
 *     <div style={{ font: theme.font, color: theme.color }}>
 *       현재 모드: {isDarkMode ? '다크 모드' : '라이트 모드'}
 *       <button onClick={toggleDarkMode}>모드 전환</button>
 *     </div>
 *   );
 * }
 * ```
 */

function useTheme() {
  const dispatch = useAppDispatch()
  const { isDarkMode, styleSystem } = useAppSelector((state) => state.theme)
  const mode = isDarkMode ? 'dark' : 'light'
  const dispatchToggleDarkMode = useCallback(() => {
    dispatch(toggleDarkMode())
  }, [dispatch])

  return {
    toggleDarkMode: dispatchToggleDarkMode,
    isDarkMode: isDarkMode,
    theme: {
      font: styleSystem.font,
      color: styleSystem.color[mode],
    },
  }
}

export default useTheme
