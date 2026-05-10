import { describe, it, expect } from 'vitest';
import {
  formatCurrency,
  invoiceStatusToLabel,
  planStatusToLabel,
  calculateTierPrice,
  getUsagePercent,
  type PricingTier,
} from '@/lib/formatters';

describe('formatCurrency', () => {
  it('formats USD by default', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('formats EUR currency', () => {
    const result = formatCurrency(1000, 'EUR');
    expect(result).toContain('1,000.00');
  });

  it('formats zero correctly', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('handles NaN gracefully', () => {
    expect(formatCurrency(NaN)).toBe('USD 0.00');
  });

  it('formats large numbers with proper separators', () => {
    expect(formatCurrency(1234567.89)).toBe('$1,234,567.89');
  });
});

describe('invoiceStatusToLabel', () => {
  it('maps paid correctly', () => {
    expect(invoiceStatusToLabel('paid')).toBe('Paid');
  });

  it('maps draft correctly', () => {
    expect(invoiceStatusToLabel('draft')).toBe('Draft');
  });

  it('maps pending correctly', () => {
    expect(invoiceStatusToLabel('pending')).toBe('Pending');
  });

  it('maps void correctly', () => {
    expect(invoiceStatusToLabel('void')).toBe('Void');
  });

  it('maps overdue correctly', () => {
    expect(invoiceStatusToLabel('overdue')).toBe('Overdue');
  });
});

describe('planStatusToLabel', () => {
  it('maps active', () => expect(planStatusToLabel('active')).toBe('Active'));
  it('maps archived', () => expect(planStatusToLabel('archived')).toBe('Archived'));
  it('maps draft', () => expect(planStatusToLabel('draft')).toBe('Draft'));
});

describe('calculateTierPrice (graduated pricing)', () => {
  const tiers: PricingTier[] = [
    { upTo: 1000, unitPrice: 0.01 },
    { upTo: 5000, unitPrice: 0.008 },
    { upTo: null, unitPrice: 0.005 },
  ];

  it('returns 0 for 0 usage', () => {
    expect(calculateTierPrice(tiers, 0)).toBe(0);
  });

  it('calculates price within first tier', () => {
    // 500 units at $0.01 = $5.00
    expect(calculateTierPrice(tiers, 500)).toBeCloseTo(5.0);
  });

  it('calculates price spanning multiple tiers', () => {
    // 1000 at $0.01 = $10, 1000 more at $0.008 = $8 → total $18
    expect(calculateTierPrice(tiers, 2000)).toBeCloseTo(18.0);
  });

  it('calculates price into infinite tier', () => {
    // 1000 at $0.01 + 4000 at $0.008 + 1000 at $0.005 = $10 + $32 + $5 = $47
    expect(calculateTierPrice(tiers, 6000)).toBeCloseTo(47.0);
  });
});

describe('getUsagePercent', () => {
  it('returns 0% for 0/anything', () => {
    expect(getUsagePercent(0, 1000)).toBe('0%');
  });

  it('returns 100% when used >= total', () => {
    expect(getUsagePercent(1000, 1000)).toBe('100%');
    expect(getUsagePercent(1500, 1000)).toBe('100%');
  });

  it('returns correct percentage', () => {
    expect(getUsagePercent(800, 1000)).toBe('80%');
    expect(getUsagePercent(250, 1000)).toBe('25%');
  });

  it('handles zero total without dividing by zero', () => {
    expect(getUsagePercent(100, 0)).toBe('0%');
  });
});
