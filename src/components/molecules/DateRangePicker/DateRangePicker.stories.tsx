import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DateRangePicker } from './DateRangePicker';
import { subDays } from 'date-fns';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Molecules/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {
    presets: { control: 'boolean' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    onChange: fn(),
    presets: true,
    placeholder: 'Select date range',
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {};

export const WithPresets: Story = {
  args: { presets: true },
};

export const Controlled: Story = {
  args: {
    value: { from: subDays(new Date(), 29), to: new Date() },
    presets: true,
  },
};

export const NoPresets: Story = {
  args: { presets: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};
