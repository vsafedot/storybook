import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Select / Dropdown component for FlexPrice UI.
 *
 * A single-select dropdown built on Radix UI Select.
 * Supports option search via a filter input.
 *
 * @prop options - Array of { label, value, disabled? } items
 * @prop value - Currently selected value
 * @prop onChange - Callback when selection changes
 * @prop placeholder - Text shown when no value is selected
 * @prop disabled - Disables the entire dropdown
 * @prop searchable - Shows a search input to filter options
 * @prop label - Optional label rendered above the select
 * @prop error - Error message; triggers red border
 */

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  label?: string;
  error?: string;
  id?: string;
  className?: string;
}

const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  searchable = false,
  label,
  error,
  id,
  className,
}: SelectProps) => {
  const [search, setSearch] = React.useState('');
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const filtered = searchable
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium text-[#374151]">
          {label}
        </label>
      )}
      <SelectPrimitive.Root value={value} onValueChange={onChange} disabled={disabled}>
        <SelectPrimitive.Trigger
          id={inputId}
          aria-invalid={!!error}
          className={cn(
            'flex h-9 w-full items-center justify-between rounded border bg-white px-3 text-sm',
            'transition-shadow duration-150 outline-none',
            'focus:border-primary focus:shadow-blue-glow',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'data-[placeholder]:text-[#94A3B8]',
            error ? 'border-danger' : 'border-[#E2E8F0]',
            className
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 text-[#64748B] opacity-70" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={4}
            className={cn(
              'z-50 min-w-[8rem] w-[var(--radix-select-trigger-width)] overflow-hidden rounded border border-[#E2E8F0]',
              'bg-white shadow-modal text-sm',
              'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2'
            )}
          >
            {searchable && (
              <div className="px-2 pt-2 pb-1 border-b border-[#F1F5F9]">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-xs px-2 py-1.5 rounded border border-[#E2E8F0] outline-none focus:border-primary"
                  onKeyDown={(e) => e.stopPropagation()}
                />
              </div>
            )}
            <SelectPrimitive.Viewport className="p-1 max-h-60 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="py-2 px-3 text-xs text-[#94A3B8]">No options found</p>
              ) : (
                filtered.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(
                      'relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none',
                      'transition-colors',
                      'hover:bg-[#F1F5F9] focus:bg-[#F1F5F9]',
                      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                      'data-[state=checked]:text-primary data-[state=checked]:font-medium'
                    )}
                  >
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute right-2">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))
              )}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
};

Select.displayName = 'Select';

export { Select };
