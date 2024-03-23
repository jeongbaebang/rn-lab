import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta = {
  title: 'Design System/Atoms/Box',
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
  },
};
