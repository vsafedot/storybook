import * as React from 'react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/formatters';

/**
 * PricingTierTable component for FlexPrice UI.
 *
 * Displays tiered, graduated, volume, or flat pricing in a readable table.
 * Matches the pricing model display from FlexPrice's Plans page.
 */

export type PricingModel = 'flat' | 'tiered' | 'graduated' | 'volume';

export interface PricingTierRow {
  upTo?: number | null;
  unitPrice: number;
  flatFee?: number;
  label?: string;
}

export interface PricingTierTableProps {
  tiers: PricingTierRow[];
  currency?: string;
  model?: PricingModel;
  title?: string;
  className?: string;
}

const modelConfig: Record<PricingModel, { label: string; description: string; color: string }> = {
  flat: {
    label: 'Flat Rate',
    description: 'Same price per unit regardless of volume.',
    color: 'bg-sky-50 text-sky-700 ring-1 ring-sky-200/60',
  },
  tiered: {
    label: 'Tiered',
    description: 'Price per unit changes based on quantity brackets.',
    color: 'bg-violet-50 text-violet-700 ring-1 ring-violet-200/60',
  },
  graduated: {
    label: 'Graduated',
    description: 'Each unit is charged at the rate of its tier.',
    color: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60',
  },
  volume: {
    label: 'Volume',
    description: 'Entire quantity billed at the rate of the highest tier reached.',
    color: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/60',
  },
};

const PricingTierTable = ({
  tiers,
  currency = 'USD',
  model = 'graduated',
  title,
  className,
}: PricingTierTableProps) => {
  const fmt = (amount: number) => formatCurrency(amount, currency);
  const config = modelConfig[model];
  const hasFlatFee = tiers.some((t) => t.flatFee !== undefined);

  return (
    <div className={cn('overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]', className)}>
      {/* Header */}
      <div className="border-b border-[#F1F5F9] px-5 py-4"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFBFF 100%)' }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#0F172A]">{title ?? config.label}</h3>
            <p className="mt-0.5 text-[12px] text-[#64748B] leading-relaxed">{config.description}</p>
          </div>
          <span className={cn('flex-shrink-0 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide', config.color)}>
            {config.label}
          </span>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#F1F5F9]"
            style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-[#64748B]">
              {model === 'flat' ? 'Per Unit' : 'Tier Range'}
            </th>
            <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-[0.08em] text-[#64748B]">
              Unit Price
            </th>
            {hasFlatFee && (
              <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-[0.08em] text-[#64748B]">
                Flat Fee
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier, idx) => {
            const prevUpTo = idx === 0 ? 0 : (tiers[idx - 1].upTo ?? 0);
            const isInfinite = tier.upTo === null || tier.upTo === undefined;
            const rangeLabel =
              model === 'flat'
                ? 'Any volume'
                : tier.label ??
                  (isInfinite
                    ? `${(prevUpTo + 1).toLocaleString()}+`
                    : `${(prevUpTo + 1).toLocaleString()} – ${tier.upTo!.toLocaleString()}`);
            const isLast = idx === tiers.length - 1;
            const isEven = idx % 2 === 0;

            return (
              <tr
                key={idx}
                className={cn(
                  'border-b border-[#F8FAFC] transition-colors duration-100 hover:bg-sky-50/30',
                  isLast && 'border-0',
                  !isEven && 'bg-[#FAFBFF]',
                )}
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    {isInfinite && (
                      <span className="inline-flex h-5 items-center rounded-full bg-gradient-to-r from-sky-50 to-blue-50 px-2 text-[10px] font-bold text-sky-600 ring-1 ring-sky-200/60">
                        ∞
                      </span>
                    )}
                    <span className="text-[13px] font-semibold text-[#1E293B]">{rangeLabel}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <span className="font-mono text-[13px] font-bold tabular text-[#0F172A]">
                    {fmt(tier.unitPrice)}
                  </span>
                </td>
                {hasFlatFee && (
                  <td className="px-5 py-3.5 text-right">
                    <span className="font-mono text-[13px] text-[#374151] tabular">
                      {tier.flatFee !== undefined ? fmt(tier.flatFee) : <span className="text-[#94A3B8]">—</span>}
                    </span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PricingTierTable.displayName = 'PricingTierTable';

export { PricingTierTable };
