import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    inputSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['text', 'number', 'email', 'password', 'search'] },
  },
  args: {
    placeholder: 'Enter value...',
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Company Name',
    placeholder: 'e.g. Acme Corporation',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email',
    error: 'Please enter a valid email address.',
    defaultValue: 'invalid-email',
  },
};

export const WithCurrencyPrefix: Story = {
  args: {
    label: 'Amount',
    prefix: '$',
    suffix: 'USD',
    type: 'number',
    placeholder: '0.00',
  },
};

export const Required: Story = {
  args: {
    label: 'Plan Name',
    placeholder: 'Enter plan name',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Customer ID',
    defaultValue: 'cust_abc123xyz',
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Webhook URL',
    placeholder: 'https://...',
    helperText: 'We will POST invoice events to this URL.',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input inputSize="sm" placeholder="Small input" label="Small" />
      <Input inputSize="md" placeholder="Medium input" label="Medium" />
      <Input inputSize="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const TypesInAction: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter value...');
    await userEvent.type(input, 'Hello FlexPrice');
    expect(input).toHaveValue('Hello FlexPrice');
    expect(args.onChange).toHaveBeenCalled();
  },
};
