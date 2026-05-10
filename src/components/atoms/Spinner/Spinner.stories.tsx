import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullPage: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { size: 'md', label: 'Loading...' },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-gray-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
  ),
};

export const WithinButton: Story = {
  render: () => (
    <div className="flex gap-3 p-4">
      <button className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium rounded bg-primary text-white opacity-80 cursor-not-allowed">
        <Spinner size="sm" />
        Creating plan...
      </button>
    </div>
  ),
};

export const FullPage: Story = {
  args: { fullPage: true, label: 'Loading dashboard...' },
  parameters: {
    layout: 'fullscreen',
  },
};
