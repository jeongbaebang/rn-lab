import React from 'react'
import { View } from 'react-native'

import type { Meta, StoryObj } from '@storybook/react'
import Box from '../../../src/components/Box'

const BoxMeta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  argTypes: {
    text: { type: 'string' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default BoxMeta

export const Basic: StoryObj<typeof Box> = {}

export const AnotherExample: StoryObj<typeof Box> = {
  args: {
    text: 'Another example',
  },
}
