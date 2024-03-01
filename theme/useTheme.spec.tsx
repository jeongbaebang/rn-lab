import React, {PropsWithChildren} from 'react';
import {expect, test} from '@jest/globals';
import {act, renderHook} from '@testing-library/react-native';
import useTheme from './useTheme';
import {Provider} from 'react-redux';
import {store} from '../store';

test('다크모드 라이트모드 상태가 바뀌어야 한다', () => {
  const wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );
  const {result} = renderHook(() => useTheme(), {wrapper});
  const previousState = result.current.isDarkMode;

  act(() => {
    result.current.toggleDarkMode();
  });

  expect(result.current.isDarkMode).toBe(!previousState);
});
