import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle, XCircle, Clock, Archive } from 'lucide-react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'muted', 'default'],
      description: 'Color scheme for the badge',
    },
    size: { control: 'select', options: ['sm', 'md'] },
    dot: { control: 'boolean', description: 'Show colored dot instead of icon' },
    children: { control: 'text' },
  },
  args: { children: 'Badge', variant: 'default', size: 'md' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Void</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="muted">Draft</Badge>
      <Badge variant="default">Default</Badge>
    </div>
  ),
};

export const WithDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="danger" dot>Archived</Badge>
      <Badge variant="muted" dot>Draft</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="success" icon={<CheckCircle />}>Paid</Badge>
      <Badge variant="danger" icon={<XCircle />}>Void</Badge>
      <Badge variant="warning" icon={<Clock />}>Pending</Badge>
      <Badge variant="muted" icon={<Archive />}>Archived</Badge>
    </div>
  ),
};

export const PlanStatuses: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Plan Status</p>
      <div className="flex gap-2">
        <Badge variant="success" dot>Active</Badge>
        <Badge variant="muted" dot>Draft</Badge>
        <Badge variant="danger" dot>Archived</Badge>
      </div>
    </div>
  ),
};

export const InvoiceStatuses: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Invoice Status</p>
      <div className="flex gap-2 flex-wrap">
        <Badge variant="success">Paid</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="danger">Overdue</Badge>
        <Badge variant="danger">Void</Badge>
        <Badge variant="muted">Draft</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge variant="success" size="sm">Small</Badge>
      <Badge variant="success" size="md">Medium</Badge>
    </div>
  ),
};
