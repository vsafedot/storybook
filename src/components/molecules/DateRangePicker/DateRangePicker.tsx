import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Calendar } from 'lucide-react';
import { format, subDays, startOfMonth, endOfMonth, startOfYear } from 'date-fns';
import { cn } from '@/lib/utils';

/**
 * DateRangePicker component for FlexPrice UI.
 *
 * A popover date range picker with optional presets (Last 7 days, Last 30 days, etc.)
 *
 * @prop value - Current DateRange { from: Date; to: Date }
 * @prop onChange - Callback when range changes
 * @prop presets - Show preset quick-select buttons (default: true)
 * @prop placeholder - Placeholder when no range selected
 * @prop disabled - Disable the picker
 */

export interface DateRange {
  from: Date;
  to: Date;
}

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  presets?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const PRESETS = [
  { label: 'Today', getRange: () => ({ from: new Date(), to: new Date() }) },
  { label: 'Last 7 days', getRange: () => ({ from: subDays(new Date(), 6), to: new Date() }) },
  { label: 'Last 30 days', getRange: () => ({ from: subDays(new Date(), 29), to: new Date() }) },
  { label: 'This month', getRange: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
  { label: 'This year', getRange: () => ({ from: startOfYear(new Date()), to: new Date() }) },
];

const DateRangePicker = ({
  value,
  onChange,
  presets = true,
  placeholder = 'Select date range',
  disabled = false,
  className,
}: DateRangePickerProps) => {
  const [open, setOpen] = React.useState(false);
  const [fromInput, setFromInput] = React.useState(value?.from ? format(value.from, 'yyyy-MM-dd') : '');
  const [toInput, setToInput] = React.useState(value?.to ? format(value.to, 'yyyy-MM-dd') : '');

  const displayText = value
    ? `${format(value.from, 'MMM d, yyyy')} – ${format(value.to, 'MMM d, yyyy')}`
    : placeholder;

  const applyInputs = () => {
    if (fromInput && toInput) {
      const from = new Date(fromInput);
      const to = new Date(toInput);
      if (!isNaN(from.getTime()) && !isNaN(to.getTime()) && from <= to) {
        onChange?.({ from, to });
        setOpen(false);
      }
    }
  };

  const applyPreset = (range: DateRange) => {
    onChange?.(range);
    setFromInput(format(range.from, 'yyyy-MM-dd'));
    setToInput(format(range.to, 'yyyy-MM-dd'));
    setOpen(false);
  };

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          disabled={disabled}
          className={cn(
            'inline-flex h-9 items-center gap-2 rounded border border-[#E2E8F0] bg-white px-3 text-sm',
            'text-[#374151] transition-shadow duration-150',
            'hover:border-[#CBD5E1] focus:outline-none focus:border-primary focus:shadow-blue-glow',
            'disabled:cursor-not-allowed disabled:opacity-50',
            !value && 'text-[#94A3B8]',
            className
          )}
          aria-label="Select date range"
        >
          <Calendar className="h-4 w-4 text-[#64748B] flex-shrink-0" aria-hidden="true" />
          <span>{displayText}</span>
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="bottom"
          align="start"
          sideOffset={6}
          className={cn(
            'z-50 w-80 rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-modal',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0'
          )}
        >
          {presets && (
            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Quick select</p>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => applyPreset(preset.getRange())}
                    className="rounded border border-[#E2E8F0] px-2.5 py-1 text-xs text-[#374151] hover:bg-[#F1F5F9] hover:border-primary hover:text-primary transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Start date</label>
              <input
                type="date"
                value={fromInput}
                onChange={(e) => setFromInput(e.target.value)}
                className="h-9 w-full rounded border border-[#E2E8F0] px-3 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">End date</label>
              <input
                type="date"
                value={toInput}
                min={fromInput}
                onChange={(e) => setToInput(e.target.value)}
                className="h-9 w-full rounded border border-[#E2E8F0] px-3 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={applyInputs}
              className="w-full h-9 rounded bg-primary text-white text-sm font-medium hover:bg-[#2680C2] transition-colors"
            >
              Apply
            </button>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};

DateRangePicker.displayName = 'DateRangePicker';

export { DateRangePicker };
