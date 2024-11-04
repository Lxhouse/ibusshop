import { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import '../../styles/index.scss';
import { fn } from '@storybook/test';

const meta = {
  title: '组件/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    addonAfter: { control: 'text' },
    addonBefore: { control: 'text' },
    allowClear: { control: 'boolean' },
    classNames: { control: 'object' },
    count: { control: 'object' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    id: { control: 'text' },
    maxLength: { control: 'number' },
    prefix: { control: 'text' },
    showCount: { control: 'boolean' },
    status: {
      control: { type: 'select', options: ['error', 'warning', undefined] },
    },
    styles: { control: 'object' },
    size: {
      control: { type: 'select', options: ['large', 'middle', 'small'] },
    },
    suffix: { control: 'text' },
    type: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'borderless', 'filled'],
      },
    },
  },
  args: {
    onChange: fn(),
    onPressEnter: fn(),
    onClear: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'Default Text',
  },
};

export const WithAddons: Story = {
  args: {
    addonBefore: 'http://',
    addonAfter: '.com',
    defaultValue: 'mywebsite',
  },
};

export const Clearable: Story = {
  args: {
    allowClear: true,
    defaultValue: 'Clearable Text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled Text',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    prefix: '🔍',
    suffix: '✔️',
    defaultValue: 'With Prefix and Suffix',
  },
};

export const WithMaxLength: Story = {
  args: {
    maxLength: 10,
    showCount: true,
    defaultValue: 'Max Length',
  },
};

export const WithCountFormatter: Story = {
  args: {
    maxLength: 20,
    showCount: {
      formatter: ({ count, maxLength }) => `${count} / ${maxLength} characters`,
    },
    defaultValue: 'Formatted Count',
  },
};

export const ErrorStatus: Story = {
  args: {
    status: 'error',
    defaultValue: 'Error Text',
  },
};

export const WarningStatus: Story = {
  args: {
    status: 'warning',
    defaultValue: 'Warning Text',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Input
        size="small"
        defaultValue="Small Size"
        style={{ marginBottom: '1rem' }}
      />
      <Input
        size="middle"
        defaultValue="Middle Size"
        style={{ marginBottom: '1rem' }}
      />
      <Input size="large" defaultValue="Large Size" />
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <Input
        variant="outlined"
        defaultValue="Outlined Variant"
        style={{ marginBottom: '1rem' }}
      />
      <Input
        variant="borderless"
        defaultValue="Borderless Variant"
        style={{ marginBottom: '1rem' }}
      />
      <Input variant="filled" defaultValue="Filled Variant" />
    </>
  ),
};
