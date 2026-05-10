import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Select } from './Select';

const planOptions = [
  { label: 'Starter', value: 'starter' },
  { label: 'Growth', value: 'growth' },
  { label: 'Business', value: 'business' },
  { label: 'Enterprise', value: 'enterprise' },
];

const currencyOptions = [
  { label: 'USD – US Dollar', value: 'USD' },
  { label: 'EUR – Euro', value: 'EUR' },
  { label: 'GBP – British Pound', value: 'GBP' },
  { label: 'INR – Indian Rupee', value: 'INR' },
  { label: 'JPY – Japanese Yen', value: 'JPY' },
  { label: 'CAD – Canadian Dollar', value: 'CAD' },
  { label: 'AUD – Australian Dollar', value: 'AUD' },
  { label: 'SGD – Singapore Dollar', value: 'SGD' },
];

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    searchable: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    options: planOptions,
    onChange: fn(),
    placeholder: 'Select a plan...',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'Billing Plan', placeholder: 'Choose a plan' },
};

export const WithSearch: Story = {
  args: {
    label: 'Currency',
    options: currencyOptions,
    searchable: true,
    placeholder: 'Search currencies...',
  },
};

export const Disabled: Story = {
  args: { label: 'Plan', value: 'growth', disabled: true },
};

export const WithError: Story = {
  args: { label: 'Plan', error: 'Please select a billing plan.' },
};

export const PreSelected: Story = {
  args: { label: 'Current Plan', value: 'business' },
};
