/**
 * TanStack Query (v5) configuration utility for FlexPrice.
 *
 * Provides pre-defined caching presets and a factory for query configs.
 * Prevents inconsistent caching across call sites by enforcing sensible defaults.
 *
 * @example
 * // Use the DEFAULT preset
 * const { data } = useQuery({ queryKey: ['invoices'], queryFn: fetchInvoices, ...QUERY_PRESETS.DEFAULT });
 *
 * // Override staleTime for real-time data
 * const config = createQueryConfig({ staleTime: 0 });
 */

export interface QueryConfigOptions {
  staleTime?: number;
  gcTime?: number;
  retry?: number | boolean;
  refetchOnWindowFocus?: boolean;
}

export interface QueryConfig {
  staleTime: number;
  gcTime: number;
  retry: number | boolean;
  refetchOnWindowFocus: boolean;
}

/** Global defaults applied to all queries unless overridden. */
const GLOBAL_DEFAULTS: QueryConfig = {
  staleTime: 5 * 60 * 1000,      // 5 minutes
  gcTime: 10 * 60 * 1000,        // 10 minutes
  retry: 2,
  refetchOnWindowFocus: false,
};

/**
 * Pre-defined query configuration presets.
 *
 * - **REALTIME**: Always fetch fresh data (staleTime=0). Use for live usage meters, current balance.
 * - **DEFAULT**: Standard 5-minute cache. Use for most listings (invoices, customers).
 * - **STATIC**: 30-minute cache. Use for plan definitions, feature flags — data that rarely changes.
 */
export const QUERY_PRESETS = {
  REALTIME: createQueryConfig({ staleTime: 0, gcTime: 60_000 }),
  DEFAULT: createQueryConfig({}),
  STATIC: createQueryConfig({ staleTime: 30 * 60_000, gcTime: 60 * 60_000 }),
} as const;

/**
 * Creates a query configuration object by merging provided options with global defaults.
 * @param overrides - Partial options to override the global defaults
 */
export function createQueryConfig(overrides: QueryConfigOptions = {}): QueryConfig {
  return {
    ...GLOBAL_DEFAULTS,
    ...overrides,
  };
}
