import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react-native'
import { composeStories } from '@storybook/react'

import * as stories from './Box.stories'

const { Basic } = composeStories(stories)

describe('Box Component', () => {
  test('renders primary box with default args', () => {
    render(<Basic />)
    const BoxElement = screen.getByText(/Hello world/i)
    expect(BoxElement).toBeOnTheScreen()
  })
})
