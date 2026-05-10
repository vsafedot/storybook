import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDebounce } from 'use-debounce';

/**
 * SearchBar component for FlexPrice UI.
 *
 * A text input with a search icon, debounced onChange, and a clear button.
 *
 * @prop value - Controlled input value
 * @prop onChange - Callback fired after debounce with the current value
 * @prop placeholder - Input placeholder text
 * @prop debounceMs - Debounce delay in milliseconds (default: 300)
 * @prop onClear - Optional callback when the clear button is clicked
 * @prop onImmediateChange - Callback fired immediately on every keystroke (useful for tracking)
 */

export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onImmediateChange?: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  debounceMs?: number;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value: externalValue = '',
      onChange,
      onImmediateChange,
      onClear,
      placeholder = 'Search...',
      debounceMs = 300,
      disabled = false,
      className,
      id,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(externalValue);
    const [debouncedValue] = useDebounce(internalValue, debounceMs);

    // Sync external value changes
    React.useEffect(() => {
      setInternalValue(externalValue);
    }, [externalValue]);

    // Fire debounced callback
    React.useEffect(() => {
      onChange?.(debouncedValue);
    }, [debouncedValue, onChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setInternalValue(v);
      onImmediateChange?.(v);
    };

    const handleClear = () => {
      setInternalValue('');
      onChange?.('');
      onClear?.();
    };

    return (
      <div className={cn('relative flex items-center', className)}>
        <Search
          className="absolute left-3 h-4 w-4 text-[#94A3B8] pointer-events-none"
          aria-hidden="true"
        />
        <input
          ref={ref}
          id={id}
          type="search"
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'h-9 w-full rounded border border-[#E2E8F0] bg-white pl-9 pr-8 text-sm',
            'text-[#0F172A] placeholder:text-[#94A3B8]',
            'outline-none transition-shadow duration-150',
            'focus:border-primary focus:shadow-blue-glow',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          aria-label={placeholder}
        />
        {internalValue && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              'absolute right-2.5 flex h-5 w-5 items-center justify-center rounded-full',
              'text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#374151] transition-colors'
            )}
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
