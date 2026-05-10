import type { Meta, StoryObj } from '@storybook/react';
import { PricingTierTable, type PricingTierRow } from './PricingTierTable';

const graduatedTiers: PricingTierRow[] = [
  { upTo: 1000, unitPrice: 0.005 },
  { upTo: 10000, unitPrice: 0.004 },
  { upTo: 100000, unitPrice: 0.003 },
  { upTo: null, unitPrice: 0.002 },
];

const tieredWithFlatFees: PricingTierRow[] = [
  { upTo: 100, unitPrice: 0.10, flatFee: 0 },
  { upTo: 1000, unitPrice: 0.08, flatFee: 10 },
  { upTo: 10000, unitPrice: 0.05, flatFee: 82 },
  { upTo: null, unitPrice: 0.03, flatFee: 532 },
];

const flatTier: PricingTierRow[] = [
  { upTo: null, unitPrice: 0.025 },
];

const volumeTiers: PricingTierRow[] = [
  { upTo: 999, unitPrice: 0.10, label: '1 – 999 units' },
  { upTo: 4999, unitPrice: 0.08, label: '1,000 – 4,999 units' },
  { upTo: 9999, unitPrice: 0.06, label: '5,000 – 9,999 units' },
  { upTo: null, unitPrice: 0.04, label: '10,000+ units' },
];

const meta: Meta<typeof PricingTierTable> = {
  title: 'Organisms/PricingTierTable',
  component: PricingTierTable,
  tags: ['autodocs'],
  argTypes: {
    model: {
      control: 'select',
      options: ['flat', 'tiered', 'graduated', 'volume'],
    },
    currency: { control: 'text' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PricingTierTable>;

export const Graduated: Story = {
  args: {
    model: 'graduated',
    tiers: graduatedTiers,
    currency: 'USD',
  },
};

export const TieredWithFlatFees: Story = {
  args: {
    model: 'tiered',
    tiers: tieredWithFlatFees,
    currency: 'USD',
  },
};

export const Flat: Story = {
  args: {
    model: 'flat',
    tiers: flatTier,
    currency: 'USD',
    title: 'Flat Rate Pricing',
  },
};

export const Volume: Story = {
  args: {
    model: 'volume',
    tiers: volumeTiers,
    currency: 'USD',
  },
};

export const EuroCurrency: Story = {
  args: {
    model: 'graduated',
    tiers: graduatedTiers,
    currency: 'EUR',
  },
};
