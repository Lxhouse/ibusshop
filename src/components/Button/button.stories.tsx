import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonSize, ButtonType } from './index';

const meta = {
  title: '组件/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    btnType: ButtonType.Primary, // 设置按钮类型为 Primary
    children: 'Primary Button', // 按钮文本内容
  },
};
