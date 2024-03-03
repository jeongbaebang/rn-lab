import React, { PropsWithChildren } from 'react'
import { act, renderHook } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import useTheme from './useTheme'
import { store } from '../redux/store'

describe('useTheme', () => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )

  test('함수를 호출하면 다크 모드 라이트 모드 상태가 바뀌어야 한다.', () => {
    const { result } = renderHook(() => useTheme(), { wrapper })
    const previousState = result.current.isDarkMode

    act(() => {
      result.current.toggleDarkMode()
    })

    expect(result.current.isDarkMode).toBe(!previousState)

    act(() => {
      result.current.toggleDarkMode()
    })

    expect(result.current.isDarkMode).toBe(previousState)
  })

  test('테마 객체에 접근할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(typeof result.current.theme).toEqual('object')
  })
})
