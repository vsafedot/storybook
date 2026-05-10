import * as React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * MetricCard component for FlexPrice UI.
 *
 * KPI card displayed on the Dashboard. Shows a label, value, optional trend indicator,
 * and an icon.
 *
 * @prop label - The metric name (e.g. "Total Revenue")
 * @prop value - The formatted metric value (e.g. "$124,500")
 * @prop trend - Percentage change (positive or negative), e.g. 12.5
 * @prop trendLabel - Custom label for trend (defaults to "vs last month")
 * @prop icon - Optional React node for the card icon
 * @prop isLoading - Shows skeleton state
 */

export interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: number;
  trendLabel?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  accentColor?: 'blue' | 'emerald' | 'violet' | 'amber' | 'rose';
}

const accentConfig = {
  blue: {
    icon: 'bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-blue-600',
    glow: 'before:from-blue-500/5 before:to-transparent',
  },
  emerald: {
    icon: 'bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 text-emerald-600',
    glow: 'before:from-emerald-500/5 before:to-transparent',
  },
  violet: {
    icon: 'bg-gradient-to-br from-violet-400/20 to-violet-600/20 text-violet-600',
    glow: 'before:from-violet-500/5 before:to-transparent',
  },
  amber: {
    icon: 'bg-gradient-to-br from-amber-400/20 to-amber-600/20 text-amber-600',
    glow: 'before:from-amber-500/5 before:to-transparent',
  },
  rose: {
    icon: 'bg-gradient-to-br from-rose-400/20 to-rose-600/20 text-rose-600',
    glow: 'before:from-rose-500/5 before:to-transparent',
  },
};

const MetricCard = ({
  label,
  value,
  trend,
  trendLabel = 'vs last month',
  icon,
  isLoading = false,
  className,
  accentColor = 'blue',
}: MetricCardProps) => {
  const accent = accentConfig[accentColor];
  const trendDirection =
    trend !== undefined ? (trend > 0 ? 'up' : trend < 0 ? 'down' : 'flat') : null;

  if (isLoading) {
    return (
      <div className={cn(
        'relative rounded-xl border border-[#E2E8F0] bg-white p-5 overflow-hidden',
        'shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.06)]',
        className
      )}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2.5">
            <div className="skeleton h-3 w-20 rounded" />
            <div className="skeleton h-8 w-32 rounded" />
            <div className="skeleton h-3 w-24 rounded" />
          </div>
          <div className="skeleton h-12 w-12 rounded-xl flex-shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'group relative rounded-xl border border-[#E2E8F0] bg-white p-5 overflow-hidden',
        'shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.06)]',
        'transition-all duration-300',
        'hover:shadow-[0_4px_16px_rgba(15,23,42,0.10),0_8px_24px_rgba(15,23,42,0.07)]',
        'hover:border-[#CBD5E1] hover:-translate-y-0.5',
        className
      )}
    >
      {/* Top-right glow */}
      <div
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${
            { blue: 'rgba(50,147,217,0.12)', emerald: 'rgba(34,197,94,0.12)',
              violet: 'rgba(139,92,246,0.12)', amber: 'rgba(245,158,11,0.12)',
              rose: 'rgba(244,63,94,0.12)' }[accentColor]
          }, transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
            {label}
          </p>
          <p className="mt-2 text-[28px] font-bold text-[#0F172A] tabular leading-none">
            {value}
          </p>

          {trend !== undefined && (
            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              {trendDirection === 'up' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200/60">
                  <TrendingUp className="h-3 w-3" aria-hidden="true" />
                  +{Math.abs(trend).toFixed(1)}%
                </span>
              )}
              {trendDirection === 'down' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700 ring-1 ring-red-200/60">
                  <TrendingDown className="h-3 w-3" aria-hidden="true" />
                  {Math.abs(trend).toFixed(1)}%
                </span>
              )}
              {trendDirection === 'flat' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200/60">
                  <Minus className="h-3 w-3" aria-hidden="true" />
                  0%
                </span>
              )}
              <span className="text-[11px] text-[#94A3B8]">{trendLabel}</span>
            </div>
          )}
        </div>

        {icon && (
          <div className={cn(
            'flex-shrink-0 rounded-xl p-3',
            'transition-transform duration-300 group-hover:scale-110',
            accent.icon
          )}>
            <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
};

MetricCard.displayName = 'MetricCard';

export { MetricCard };
