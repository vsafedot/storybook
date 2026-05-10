import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign, Users, FileText, LayoutGrid, TrendingUp, Zap } from 'lucide-react';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'Molecules/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    trend: { control: 'number' },
    trendLabel: { control: 'text' },
    isLoading: { control: 'boolean' },
    accentColor: {
      control: 'select',
      options: ['blue', 'emerald', 'violet', 'amber', 'rose'],
    },
  },
  args: {
    label: 'Total Revenue',
    value: '$124,500',
    trend: 12.5,
    trendLabel: 'vs last month',
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: { icon: <DollarSign />, accentColor: 'blue' },
};

export const WithPositiveTrend: Story = {
  args: {
    label: 'Active Subscriptions',
    value: '842',
    trend: 4.2,
    icon: <Users />,
    accentColor: 'emerald',
  },
};

export const WithNegativeTrend: Story = {
  args: {
    label: 'Outstanding Invoices',
    value: '$18,200',
    trend: -1.5,
    icon: <FileText />,
    accentColor: 'rose',
  },
};

export const NoTrend: Story = {
  args: {
    label: 'Active Plans',
    value: '12',
    trend: 0,
    icon: <LayoutGrid />,
    accentColor: 'violet',
  },
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <MetricCard label="Total Revenue" value="$124,500" trend={12.5} icon={<DollarSign />} accentColor="blue" />
      <MetricCard label="Active Subscriptions" value="842" trend={4.2} icon={<Users />} accentColor="emerald" />
      <MetricCard label="Outstanding Invoices" value="$18,200" trend={-1.5} icon={<FileText />} accentColor="rose" />
      <MetricCard label="Active Plans" value="12" trend={0} icon={<LayoutGrid />} accentColor="violet" />
    </div>
  ),
};

export const AllAccents: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <MetricCard label="MRR" value="$52,400" trend={8.1} icon={<DollarSign />} accentColor="blue" />
      <MetricCard label="Revenue" value="$124,500" trend={12.5} icon={<TrendingUp />} accentColor="emerald" />
      <MetricCard label="Plans" value="12" trend={0} icon={<LayoutGrid />} accentColor="violet" />
      <MetricCard label="Invoices" value="$18,200" trend={-1.5} icon={<FileText />} accentColor="rose" />
      <MetricCard label="API Calls" value="9.2M" trend={22.4} icon={<Zap />} accentColor="amber" />
      <MetricCard label="Customers" value="842" trend={4.2} icon={<Users />} accentColor="blue" />
    </div>
  ),
};

export const LoadingGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-3xl">
      {Array.from({ length: 4 }).map((_, i) => (
        <MetricCard key={i} label="" value="" isLoading />
      ))}
    </div>
  ),
};
