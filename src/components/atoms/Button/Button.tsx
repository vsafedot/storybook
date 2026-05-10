import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

/**
 * Button component for FlexPrice UI.
 *
 * @prop variant - Visual style: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
 * @prop size - Dimensions: 'sm' | 'md' | 'lg'
 * @prop isLoading - Shows spinner and disables the button
 * @prop disabled - Disables interaction and reduces opacity
 * @prop asChild - Renders as the child element using Radix Slot
 * @prop leftIcon - Icon node rendered before the label
 * @prop rightIcon - Icon node rendered after the label
 */

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium',
    'rounded-md transition-all duration-200 focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none cursor-pointer relative overflow-hidden',
    'active:scale-[0.97]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-b from-[#3EA3E8] to-[#2B82C4] text-white',
          'shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_2px_8px_rgba(50,147,217,0.35)]',
          'hover:from-[#47AAED] hover:to-[#3293D9]',
          'hover:shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_4px_16px_rgba(50,147,217,0.45)]',
          'active:from-[#2B82C4] active:to-[#2072B0]',
          'border border-[#2680C2]/30',
        ],
        secondary: [
          'bg-white text-[#1E293B] border border-[#E2E8F0]',
          'shadow-[0_1px_3px_rgba(15,23,42,0.06)]',
          'hover:bg-[#F8FAFC] hover:border-[#CBD5E1] hover:shadow-[0_2px_8px_rgba(15,23,42,0.1)]',
        ],
        ghost: [
          'bg-transparent text-[#475569] border border-transparent',
          'hover:bg-[#F1F5F9] hover:text-[#1E293B]',
          'active:bg-[#E2E8F0]',
        ],
        danger: [
          'bg-gradient-to-b from-[#F87171] to-[#DC2626] text-white',
          'shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_2px_8px_rgba(239,68,68,0.30)]',
          'hover:from-[#FC8A8A] hover:to-[#EF4444]',
          'hover:shadow-[0_4px_16px_rgba(239,68,68,0.40)]',
          'border border-[#DC2626]/20',
        ],
        outline: [
          'border-2 border-[#3293D9] text-[#3293D9] bg-transparent',
          'hover:bg-[#3293D9]/5',
          'active:bg-[#3293D9]/10',
        ],
      },
      size: {
        sm: 'h-7 px-3 text-xs tracking-[0.01em]',
        md: 'h-9 px-4 text-sm tracking-[0.01em]',
        lg: 'h-11 px-6 text-[15px] tracking-[0.01em]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {/* Shimmer overlay on primary */}
        {(variant === 'primary' || !variant) && (
          <span
            className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
            }}
          />
        )}
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon && <span className="flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4">{rightIcon}</span>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
