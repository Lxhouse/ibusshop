import { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import '../../styles/index.scss';
import { fn } from '@storybook/test';
const meta = {
  title: '组件/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default', // 设置按钮类型为 Primary
    children: 'Default Button', // 按钮文本内容
  },
};

export const Primary: Story = {
  args: {
    type: 'primary', // 设置按钮类型为 Primary
    children: 'Primary Button', // 按钮文本内容
  },
};
