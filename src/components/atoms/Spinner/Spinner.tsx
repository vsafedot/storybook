import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

/**
 * Spinner / LoadingState component for FlexPrice UI.
 *
 * @prop size - Diameter: 'sm' (16px) | 'md' (24px) | 'lg' (40px)
 * @prop fullPage - If true, renders as a centered full-screen overlay
 * @prop label - Accessible text label (defaults to 'Loading...')
 * @prop className - Additional classes
 */

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  fullPage?: boolean;
  label?: string;
  className?: string;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
};

const Spinner = ({ size = 'md', fullPage = false, label = 'Loading...', className }: SpinnerProps) => {
  const icon = (
    <Loader2
      className={cn('animate-spin text-primary', sizeMap[size], className)}
      aria-hidden="true"
    />
  );

  if (fullPage) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm"
        role="status"
        aria-label={label}
      >
        {icon}
        <span className="text-sm text-[#64748B]">{label}</span>
      </div>
    );
  }

  return (
    <span role="status" aria-label={label} className="inline-flex">
      {icon}
      <span className="sr-only">{label}</span>
    </span>
  );
};

Spinner.displayName = 'Spinner';

export { Spinner };
