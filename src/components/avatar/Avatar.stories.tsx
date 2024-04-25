import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const src = {
  none: '',
  display:
    'https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png',
  wrong: 'https://wrong.png',
};

const meta = {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      step: 5,
      min: 0,
      max: 300,
      range: true,
    },
    src: {
      options: Object.keys(src),
      mapping: src,
      control: {
        type: 'select',
      },
    },
    isDarkMode: {
      control: 'boolean',
    },
    badge: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 50,
  },
};
