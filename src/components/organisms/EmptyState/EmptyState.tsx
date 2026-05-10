import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button/Button';

/**
 * EmptyState component for FlexPrice UI.
 *
 * Full-page, inline, or card empty state with icon, headline, subtext, and CTA.
 * Used when list pages have no data (no invoices, no plans, etc.)
 *
 * @prop icon - React node for the illustration/icon
 * @prop heading - Primary heading text
 * @prop subtext - Descriptive text explaining the empty state
 * @prop ctaLabel - Primary CTA button label
 * @prop onCtaClick - Primary CTA click handler
 * @prop secondaryCtaLabel - Optional secondary action label
 * @prop onSecondaryCtaClick - Optional secondary CTA handler
 * @prop variant - Layout: 'full-page' | 'card' | 'inline'
 */

export interface EmptyStateProps {
  icon?: React.ReactNode;
  heading: string;
  subtext?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  secondaryCtaLabel?: string;
  onSecondaryCtaClick?: () => void;
  variant?: 'full-page' | 'card' | 'inline';
  className?: string;
}

const EmptyState = ({
  icon,
  heading,
  subtext,
  ctaLabel,
  onCtaClick,
  secondaryCtaLabel,
  onSecondaryCtaClick,
  variant = 'full-page',
  className,
}: EmptyStateProps) => {
  const content = (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        variant === 'full-page' && 'py-24 px-8',
        variant === 'card' && 'py-14 px-8',
        variant === 'inline' && 'py-8 px-4'
      )}
    >
      {icon && (
        <div
          className={cn(
            'relative flex items-center justify-center rounded-2xl mb-6',
            'before:absolute before:inset-0 before:rounded-2xl before:opacity-50',
            variant === 'full-page' && 'h-20 w-20',
            variant === 'card' && 'h-16 w-16',
            variant === 'inline' && 'h-12 w-12',
          )}
          style={{
            background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
            boxShadow: '0 2px 12px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.04)',
          }}
        >
          <span className={cn(
            'text-[#94A3B8] [&>svg]:h-1/2 [&>svg]:w-1/2 flex items-center justify-center',
            '[&>svg]:h-8 [&>svg]:w-8',
            variant === 'card' && '[&>svg]:h-7 [&>svg]:w-7',
            variant === 'inline' && '[&>svg]:h-5 [&>svg]:w-5',
          )}>
            {icon}
          </span>
        </div>
      )}

      <h2
        className={cn(
          'font-bold text-[#1E293B] leading-tight',
          variant === 'full-page' && 'text-[22px]',
          variant === 'card' && 'text-lg',
          variant === 'inline' && 'text-base'
        )}
      >
        {heading}
      </h2>

      {subtext && (
        <p
          className={cn(
            'mt-2 text-[#64748B] max-w-sm leading-relaxed',
            variant === 'full-page' && 'text-[14px]',
            (variant === 'card' || variant === 'inline') && 'text-[13px]'
          )}
        >
          {subtext}
        </p>
      )}

      {(ctaLabel || secondaryCtaLabel) && (
        <div className="mt-7 flex items-center gap-3 flex-wrap justify-center">
          {ctaLabel && (
            <Button
              variant="primary"
              size={variant === 'inline' ? 'sm' : 'md'}
              onClick={onCtaClick}
            >
              {ctaLabel}
            </Button>
          )}
          {secondaryCtaLabel && (
            <Button
              variant="secondary"
              size={variant === 'inline' ? 'sm' : 'md'}
              onClick={onSecondaryCtaClick}
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  if (variant === 'card') {
    return (
      <div
        className={cn(
          'rounded-xl border border-dashed border-[#CBD5E1] bg-white',
          'hover:border-[#93C5FD] transition-colors duration-200',
          className
        )}
      >
        {content}
      </div>
    );
  }

  return <div className={cn(className)}>{content}</div>;
};

EmptyState.displayName = 'EmptyState';

export { EmptyState };
