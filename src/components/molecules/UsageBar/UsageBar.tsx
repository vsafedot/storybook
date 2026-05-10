import * as React from 'react';
import { cn } from '@/lib/utils';
import { getUsagePercent } from '@/lib/formatters';

/**
 * UsageBar / MeterProgress component for FlexPrice UI.
 *
 * Displays a labelled progress bar showing used vs. entitled units.
 * Color changes based on usage level:
 * - 0–75%: primary blue
 * - 75–90%: warning amber
 * - 90–100%: danger red
 *
 * @prop label - Metric name (e.g. "API Calls")
 * @prop used - Number of units consumed
 * @prop total - Total entitled units
 * @prop unit - Unit label (e.g. "requests", "GB")
 * @prop showPercentage - Whether to show percentage alongside values
 * @prop size - Height variant: 'sm' | 'md'
 */

export interface UsageBarProps {
  label: string;
  used: number;
  total: number;
  unit?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

function formatUsageNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

const UsageBar = ({
  label,
  used,
  total,
  unit,
  showPercentage = false,
  size = 'md',
  className,
}: UsageBarProps) => {
  const pct = total === 0 ? 0 : Math.min(100, Math.round((used / total) * 100));
  const percentText = getUsagePercent(used, total);

  const isWarning = pct >= 75 && pct < 90;
  const isDanger = pct >= 90;

  const barGradient = isDanger
    ? 'from-orange-500 to-red-500'
    : isWarning
    ? 'from-yellow-400 to-amber-500'
    : 'from-sky-400 to-blue-500';

  const trackHeight = size === 'sm' ? 'h-1.5' : 'h-2';

  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-[#1E293B]">{label}</span>
          {isDanger && (
            <span className="inline-flex items-center rounded-full bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-600 ring-1 ring-red-200/60 animate-pulse">
              LIMIT
            </span>
          )}
          {isWarning && !isDanger && (
            <span className="inline-flex items-center rounded-full bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 ring-1 ring-amber-200/60">
              HIGH
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[13px] font-bold text-[#0F172A] tabular">
            {formatUsageNumber(used)}
          </span>
          <span className="text-[11px] text-[#94A3B8]">
            / {formatUsageNumber(total)}{unit && ` ${unit}`}
          </span>
          {showPercentage && (
            <span className={cn(
              'ml-1 text-[11px] font-semibold',
              isDanger ? 'text-red-600' : isWarning ? 'text-amber-600' : 'text-slate-500'
            )}>
              {percentText}
            </span>
          )}
        </div>
      </div>

      {/* Track */}
      <div
        className={cn('w-full rounded-full bg-[#F1F5F9] overflow-hidden', trackHeight)}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${percentText} used`}
      >
        <div
          className={cn(
            'h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out',
            barGradient
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

UsageBar.displayName = 'UsageBar';

export { UsageBar };
