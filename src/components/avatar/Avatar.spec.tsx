import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { composeStories } from '@storybook/react';

import * as stories from './Avatar.stories';

const { Basic } = composeStories(stories);

describe('Avatar Component', () => {
  test('초기값이 올바르게 구성되어야 한다.', () => {
    render(<Basic />);
    const Avatar = screen.getByRole('image');
    expect(Avatar).toHaveStyle({
      backgroundColor: 'gray',
      borderRadius: 50,
      height: 50,
      width: 50,
    });
    expect(Avatar).toHaveProp('accessibilityLabel', 'Avatar Image');
    expect(Avatar).toHaveProp('accessibilityRole', 'image');
    expect(Avatar).toHaveProp('accessible', true);
  });

  test('badge 속성에 따라 badge 컴포넌트가 렌더링되어야 한다.', () => {
    render(<Basic badge />);
    const WithBadge = screen.getByLabelText('Avatar Badge');
    expect(WithBadge).toBeOnTheScreen();

    render(<Basic />);
    const WithoutBadge = screen.queryByLabelText('Avatar Badge');
    expect(WithoutBadge).toBeNull();
  });

  test('테마에 따라서 badge border 색상이 바뀌어야 한다.', () => {
    render(<Basic badge isDarkMode />);
    const BadgeDark = screen.getByLabelText('Avatar Badge');
    expect(BadgeDark).toHaveStyle({ backgroundColor: 'black' });

    render(<Basic badge />);
    const BadgeLight = screen.getByLabelText('Avatar Badge');
    expect(BadgeLight).toHaveStyle({ backgroundColor: 'white' });
  });
});
