import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * useFilterStore — Zustand-based filter persistence for FlexPrice list pages.
 *
 * Persists per-route filter state in sessionStorage so filters survive page navigations
 * within the session but reset on new tabs.
 *
 * URL sync: Only a shallow fingerprint (count of active non-default filters) is pushed
 * to the URL to keep it bookmarkable without bloating the query string.
 *
 * @example
 * const { setFilter, resetFilters, getFilters } = useFilterStore('invoices');
 * setFilter('status', 'paid');
 * // URL becomes: ?filters=1 (one active filter)
 */

export type FilterValue = string | number | boolean | null | string[];

export interface FilterState {
  [key: string]: FilterValue;
}

interface FilterStoreState {
  /** Map of routeKey → filter state */
  filters: Record<string, FilterState>;
  setFilter: (routeKey: string, key: string, value: FilterValue) => void;
  resetFilters: (routeKey: string) => void;
  getFilters: (routeKey: string) => FilterState;
  getActiveFilterCount: (routeKey: string) => number;
}

export const useFilterStore = create<FilterStoreState>()(
  persist(
    (set, get) => ({
      filters: {},

      setFilter: (routeKey, key, value) => {
        set((state) => ({
          filters: {
            ...state.filters,
            [routeKey]: {
              ...(state.filters[routeKey] ?? {}),
              [key]: value,
            },
          },
        }));
        // Sync fingerprint to URL
        const newFilters = get().filters[routeKey] ?? {};
        syncFingerprintToUrl({ ...newFilters, [key]: value });
      },

      resetFilters: (routeKey) => {
        set((state) => ({
          filters: {
            ...state.filters,
            [routeKey]: {},
          },
        }));
        syncFingerprintToUrl({});
      },

      getFilters: (routeKey) => get().filters[routeKey] ?? {},

      getActiveFilterCount: (routeKey) => {
        const filters = get().filters[routeKey] ?? {};
        return countActiveFilters(filters);
      },
    }),
    {
      name: 'flexprice-filters',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

/** Counts filters that are non-null and non-empty. */
function countActiveFilters(filters: FilterState): number {
  return Object.values(filters).filter((v) => {
    if (v === null || v === undefined || v === '') return false;
    if (Array.isArray(v)) return v.length > 0;
    return true;
  }).length;
}

/** Pushes a shallow fingerprint (filter count) to the URL query string. */
function syncFingerprintToUrl(filters: FilterState): void {
  const count = countActiveFilters(filters);
  const url = new URL(window.location.href);
  if (count > 0) {
    url.searchParams.set('filters', String(count));
  } else {
    url.searchParams.delete('filters');
  }
  window.history.replaceState({}, '', url.toString());
}

/**
 * Convenience hook that scopes the filter store to a specific route.
 * @param routeKey - Page identifier (e.g. 'invoices', 'customers')
 */
export function useScopedFilters(routeKey: string) {
  const setFilter = useFilterStore((s) => s.setFilter);
  const resetFilters = useFilterStore((s) => s.resetFilters);
  const getFilters = useFilterStore((s) => s.getFilters);
  const getActiveFilterCount = useFilterStore((s) => s.getActiveFilterCount);

  return {
    filters: getFilters(routeKey),
    activeCount: getActiveFilterCount(routeKey),
    setFilter: (key: string, value: FilterValue) => setFilter(routeKey, key, value),
    resetFilters: () => resetFilters(routeKey),
  };
}
