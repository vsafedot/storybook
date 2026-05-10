import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

/**
 * Tooltip component for FlexPrice UI.
 *
 * Wraps Radix UI Tooltip with FlexPrice styling.
 *
 * @prop content - The tooltip content (string or ReactNode)
 * @prop side - Placement: 'top' | 'right' | 'bottom' | 'left'
 * @prop delay - Open delay in milliseconds (default: 400ms)
 * @prop children - The trigger element
 */

export interface TooltipProps {
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = ({ content, side = 'top', delay = 400, children, className }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={6}
            className={cn(
              'z-50 max-w-xs rounded bg-[#0F172A] px-2.5 py-1.5 text-xs text-white shadow-md',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
              'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              className
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-[#0F172A]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipProvider };
