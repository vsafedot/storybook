import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Input component for FlexPrice UI.
 *
 * A flexible text/number input with optional label, error state,
 * prefix (e.g. currency symbol), suffix, and helper text.
 *
 * @prop label - Field label rendered above the input
 * @prop error - Error message rendered below the input; triggers red border
 * @prop helperText - Descriptive text rendered below the input when no error
 * @prop prefix - Content rendered inside the input on the left (e.g. "$")
 * @prop suffix - Content rendered inside the input on the right (e.g. "USD")
 * @prop required - Shows asterisk on label
 * @prop inputSize - Height variant: 'sm' | 'md' | 'lg'
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  required?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      prefix,
      suffix,
      required,
      inputSize = 'md',
      id,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    const sizeClasses = {
      sm: 'h-7 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-[15px]',
    };

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] font-semibold text-[#374151] select-none tracking-wide uppercase"
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}

        <div className="relative flex items-center group">
          {prefix && (
            <span className={cn(
              'absolute left-0 flex items-center justify-center font-medium text-[#64748B] pointer-events-none z-10',
              'border-r border-[#E2E8F0] bg-[#F8FAFC] rounded-l-md transition-colors',
              inputSize === 'sm' && 'h-7 px-2.5 text-xs',
              inputSize === 'md' && 'h-9 px-3 text-sm',
              inputSize === 'lg' && 'h-11 px-3.5 text-base',
              error ? 'border-red-200' : 'border-[#E2E8F0]',
            )}>
              {prefix}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={cn(
              'w-full rounded-md bg-white text-[#0F172A] placeholder:text-[#94A3B8]',
              'transition-all duration-200 outline-none',
              'border shadow-[0_1px_3px_rgba(15,23,42,0.04)]',
              'focus:shadow-[0_0_0_3px_rgba(50,147,217,0.15),0_1px_3px_rgba(15,23,42,0.04)]',
              sizeClasses[inputSize],
              prefix
                ? inputSize === 'sm' ? 'pl-9' : inputSize === 'lg' ? 'pl-12' : 'pl-10'
                : 'pl-3.5',
              suffix ? 'pr-16' : 'pr-3.5',
              error
                ? 'border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]'
                : 'border-[#E2E8F0] focus:border-[#3293D9]',
              'disabled:bg-[#F8FAFC] disabled:text-[#94A3B8] disabled:cursor-not-allowed disabled:shadow-none',
              className
            )}
            {...props}
          />

          {suffix && (
            <span className="absolute right-0 flex items-center justify-center h-full px-3 text-xs font-medium text-[#64748B] bg-[#F8FAFC] border-l border-[#E2E8F0] rounded-r-md pointer-events-none">
              {suffix}
            </span>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className="flex items-center gap-1 text-xs text-red-600 font-medium" role="alert">
            <span className="inline-block h-1 w-1 rounded-full bg-red-500 flex-shrink-0" />
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-[#94A3B8] leading-relaxed">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
