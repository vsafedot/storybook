import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FileText, Users, LayoutGrid, CreditCard, Wallet } from 'lucide-react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    subtext: { control: 'text' },
    ctaLabel: { control: 'text' },
    secondaryCtaLabel: { control: 'text' },
    variant: { control: 'select', options: ['full-page', 'card', 'inline'] },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: <FileText />,
    heading: 'No invoices yet',
    subtext: 'Once your customers are billed, invoices will appear here.',
    ctaLabel: 'Create Invoice',
    onCtaClick: fn(),
    variant: 'full-page',
  },
};

export const NoCustomers: Story = {
  args: {
    icon: <Users />,
    heading: 'No customers found',
    subtext: 'Add customers manually or import them from a CSV file.',
    ctaLabel: 'Add Customer',
    secondaryCtaLabel: 'Import CSV',
    onCtaClick: fn(),
    onSecondaryCtaClick: fn(),
    variant: 'full-page',
  },
};

export const NoPlans: Story = {
  args: {
    icon: <LayoutGrid />,
    heading: 'No pricing plans',
    subtext: 'Create your first plan to start offering subscriptions.',
    ctaLabel: 'Create Plan',
    onCtaClick: fn(),
    variant: 'full-page',
  },
};

export const NoSubscriptions: Story = {
  args: {
    icon: <CreditCard />,
    heading: 'No active subscriptions',
    subtext: 'Assign a plan to a customer to create a subscription.',
    ctaLabel: 'New Subscription',
    onCtaClick: fn(),
    variant: 'card',
  },
};

export const NoCredits: Story = {
  args: {
    icon: <Wallet />,
    heading: 'No credit ledger entries',
    subtext: 'Credits will appear here once issued to customers.',
    variant: 'inline',
  },
};

export const CardVariant: Story = {
  args: {
    icon: <FileText />,
    heading: 'No results',
    subtext: 'Try adjusting your filters to find what you\'re looking for.',
    ctaLabel: 'Clear Filters',
    onCtaClick: fn(),
    variant: 'card',
  },
};

export const NoCTA: Story = {
  args: {
    icon: <FileText />,
    heading: 'Search returned no results',
    subtext: 'No invoices match your current search query.',
    variant: 'inline',
  },
};
