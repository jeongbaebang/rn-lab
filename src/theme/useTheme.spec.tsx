import React, { PropsWithChildren } from 'react'
import { renderHook } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import useTheme from './useTheme'
import { store } from '../redux/store'

//TODO: 디스패치 훅 테스트
describe('useTheme', () => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )

  test('테마 객체에 접근할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(typeof result.current.theme).toEqual('object')
  })
})
