import type { Meta, StoryObj } from '@storybook/react';
import { UsageBar } from './UsageBar';

const meta: Meta<typeof UsageBar> = {
  title: 'Molecules/UsageBar',
  component: UsageBar,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    used: { control: 'number' },
    total: { control: 'number' },
    unit: { control: 'text' },
    showPercentage: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: {
    label: 'API Calls',
    used: 5200,
    total: 10000,
    unit: 'requests',
    showPercentage: true,
  },
};

export default meta;
type Story = StoryObj<typeof UsageBar>;

export const Default: Story = {};

export const NearLimit: Story = {
  args: {
    label: 'API Calls',
    used: 8200,
    total: 10000,
    unit: 'requests',
    showPercentage: true,
  },
};

export const AtLimit: Story = {
  args: {
    label: 'API Calls',
    used: 10000,
    total: 10000,
    unit: 'requests',
    showPercentage: true,
  },
};

export const DataStorage: Story = {
  args: {
    label: 'Storage',
    used: 45,
    total: 100,
    unit: 'GB',
    showPercentage: true,
  },
};

export const MultipleMeters: Story = {
  render: () => (
    <div className="max-w-md space-y-5">
      <UsageBar label="API Calls" used={8200} total={10000} unit="req/mo" showPercentage />
      <UsageBar label="Data Storage" used={45} total={100} unit="GB" showPercentage />
      <UsageBar label="Events Tracked" used={1200000} total={5000000} unit="events" showPercentage />
      <UsageBar label="Webhooks" used={9800} total={10000} unit="deliveries" showPercentage />
    </div>
  ),
};

export const Small: Story = {
  args: { size: 'sm', label: 'Storage', used: 60, total: 100, unit: 'GB' },
};
