import React, { PropsWithChildren } from 'react';
import { act, renderHook } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import useTheme from './useTheme';
import { store } from '../redux/store';

let mockFn: jest.Mock;

jest.mock('react-native', () => {
  mockFn = jest.fn(() => 'dark');

  return {
    __esModule: true,
    useColorScheme: mockFn,
    Appearance: {
      getColorScheme: mockFn,
    },
  };
});

describe('useTheme', () => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  test('toggles theme from dark to light', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.colorScheme.updateLocalColorScheme('light');
    });

    expect(result.current.colorScheme).toMatchObject({
      isDarkMode: false,
      isSystemColorScheme: false,
      localColorScheme: 'light',
      systemColorScheme: 'dark',
    });

    act(() => {
      result.current.colorScheme.updateLocalColorScheme('dark');
    });

    expect(result.current.colorScheme).toMatchObject({
      isDarkMode: true,
      isSystemColorScheme: false,
      localColorScheme: 'dark',
      systemColorScheme: 'dark',
    });
  });

  test('시스템 테마를 활성화시키면 로컬 테마는 시스템 테마에 맞춰서 테마 모드가 바뀌어야 한다.', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      // 로컬 테마 사용 (라이트)
      result.current.colorScheme.updateLocalColorScheme('light');
    });

    expect(result.current.colorScheme).toMatchObject({
      isDarkMode: false,
      isSystemColorScheme: false,
      localColorScheme: 'light',
      systemColorScheme: 'dark',
    });

    act(() => {
      // 시스템 테마 사용
      result.current.colorScheme.toggleSystemColorScheme(true);
    });

    expect(result.current.colorScheme).toMatchObject({
      isDarkMode: true,
      isSystemColorScheme: true,
      localColorScheme: 'dark',
      systemColorScheme: 'dark',
    });

    act(() => {
      // 로컬 테마 사용 (라이트)
      result.current.colorScheme.updateLocalColorScheme('light');
    });

    expect(result.current.colorScheme).toMatchObject({
      isDarkMode: false,
      isSystemColorScheme: false,
      localColorScheme: 'light',
      systemColorScheme: 'dark',
    });
  });

  test('테마 객체에 접근할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(Object.keys(result.current.theme).length).toBe(2);
    expect(result.current.theme).toMatchObject({
      color: expect.any(Object),
      font: expect.any(Object),
    });
  });
});
