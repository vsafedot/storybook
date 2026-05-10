/**
 * Utility functions for formatting values in the FlexPrice app.
 * Used across currency display, status labels, and pricing calculations.
 */

/** Supported invoice/subscription statuses */
export type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'void' | 'overdue';
export type PlanStatus = 'active' | 'archived' | 'draft';
export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'trialing' | 'paused';

/**
 * Formats a numeric amount as a localized currency string.
 * @param amount - The numeric value to format
 * @param currency - ISO 4217 currency code (default: 'USD')
 * @param locale - BCP 47 locale string (default: 'en-US')
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  if (isNaN(amount)) return `${currency} 0.00`;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Maps an invoice status code to a human-readable label.
 */
export function invoiceStatusToLabel(status: InvoiceStatus): string {
  const labels: Record<InvoiceStatus, string> = {
    draft: 'Draft',
    pending: 'Pending',
    paid: 'Paid',
    void: 'Void',
    overdue: 'Overdue',
  };
  return labels[status] ?? status;
}

/**
 * Maps a plan status code to a human-readable label.
 */
export function planStatusToLabel(status: PlanStatus): string {
  const labels: Record<PlanStatus, string> = {
    active: 'Active',
    archived: 'Archived',
    draft: 'Draft',
  };
  return labels[status] ?? status;
}

/**
 * Maps a subscription status code to a human-readable label.
 */
export function subscriptionStatusToLabel(status: SubscriptionStatus): string {
  const labels: Record<SubscriptionStatus, string> = {
    active: 'Active',
    cancelled: 'Cancelled',
    expired: 'Expired',
    trialing: 'Trialing',
    paused: 'Paused',
  };
  return labels[status] ?? status;
}

/** A single pricing tier definition */
export interface PricingTier {
  upTo: number | null; // null means "infinity"
  unitPrice: number;
  flatFee?: number;
}

/**
 * Calculates the total price for graduated (tiered) pricing.
 * Each unit is charged at the rate of the tier it falls into.
 * @param tiers - Array of tier definitions sorted by upTo ascending
 * @param usage - Number of units consumed
 */
export function calculateTierPrice(tiers: PricingTier[], usage: number): number {
  if (usage <= 0) return 0;
  let remaining = usage;
  let total = 0;
  let prevUpTo = 0;

  for (const tier of tiers) {
    if (remaining <= 0) break;
    const tierCapacity = tier.upTo === null ? Infinity : tier.upTo - prevUpTo;
    const unitsInTier = Math.min(remaining, tierCapacity);
    total += unitsInTier * tier.unitPrice + (tier.flatFee ?? 0);
    remaining -= unitsInTier;
    prevUpTo = tier.upTo ?? prevUpTo;
  }

  return total;
}

/**
 * Formats a number with compact notation (1.2K, 4.5M, etc.)
 */
export function formatCompact(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Returns a percentage string from used/total values.
 * @example getUsagePercent(800, 1000) => "80%"
 */
export function getUsagePercent(used: number, total: number): string {
  if (total === 0) return '0%';
  const pct = Math.min(100, Math.round((used / total) * 100));
  return `${pct}%`;
}
