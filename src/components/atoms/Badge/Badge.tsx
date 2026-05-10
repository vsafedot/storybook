import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge / StatusChip component for FlexPrice UI.
 *
 * Displays a small colored pill label for statuses (plan, invoice, subscription).
 *
 * @prop variant - Color scheme: 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'default'
 * @prop size - Dimensions: 'sm' | 'md'
 * @prop icon - Optional icon node rendered before the label
 * @prop dot - Shows a small color dot instead of an icon
 */

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-semibold rounded-full whitespace-nowrap tracking-wide',
  {
    variants: {
      variant: {
        success: [
          'bg-emerald-50 text-emerald-700',
          'ring-1 ring-emerald-200/60',
        ],
        warning: [
          'bg-amber-50 text-amber-700',
          'ring-1 ring-amber-200/60',
        ],
        danger: [
          'bg-red-50 text-red-700',
          'ring-1 ring-red-200/60',
        ],
        info: [
          'bg-sky-50 text-sky-700',
          'ring-1 ring-sky-200/60',
        ],
        muted: [
          'bg-slate-100 text-slate-600',
          'ring-1 ring-slate-200/60',
        ],
        default: [
          'bg-slate-100 text-slate-700',
          'ring-1 ring-slate-200/60',
        ],
        purple: [
          'bg-violet-50 text-violet-700',
          'ring-1 ring-violet-200/60',
        ],
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px] leading-[14px]',
        md: 'px-2.5 py-[3px] text-[11px] leading-[16px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const dotColorMap: Record<string, string> = {
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  info: 'bg-sky-500',
  muted: 'bg-slate-400',
  default: 'bg-slate-400',
  purple: 'bg-violet-500',
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'h-[6px] w-[6px] rounded-full flex-shrink-0',
              dotColorMap[variant ?? 'default'] ?? 'bg-slate-400'
            )}
            aria-hidden="true"
          />
        )}
        {!dot && icon && (
          <span className="flex-shrink-0 [&>svg]:h-[10px] [&>svg]:w-[10px]">{icon}</span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
