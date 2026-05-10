import { useVirtualizer } from '@tanstack/react-virtual';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * DataTable component for FlexPrice UI.
 *
 * A full-featured data table with:
 * - Sortable columns with animated indicators
 * - Loading skeleton state
 * - Empty state support
 * - Pagination controls
 * - Optional virtualisation (for 10,000+ rows) via @tanstack/react-virtual
 */

export interface ColumnDef<T = Record<string, unknown>> {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: ColumnDef<T>[];
  data: T[];
  isLoading?: boolean;
  emptyState?: React.ReactNode;
  onRowClick?: (row: T) => void;
  virtualized?: boolean;
  rowHeight?: number;
  pageSize?: number;
  className?: string;
  maxHeight?: string;
}

type SortDir = 'asc' | 'desc' | null;

function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  isLoading = false,
  emptyState,
  onRowClick,
  virtualized = false,
  rowHeight = 48,
  pageSize = 10,
  className,
  maxHeight = '600px',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDir>(null);
  const [page, setPage] = React.useState(1);
  const parentRef = React.useRef<HTMLDivElement>(null);

  const sorted = React.useMemo(() => {
    if (!sortKey || !sortDir) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === bv) return 0;
      const cmp = String(av) < String(bv) ? -1 : 1;
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  const totalPages = Math.ceil(sorted.length / pageSize);
  const paginated = virtualized ? sorted : sorted.slice((page - 1) * pageSize, page * pageSize);

  const rowVirtualizer = useVirtualizer({
    count: sorted.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });

  const handleSort = (key: string) => {
    if (sortKey !== key) { setSortKey(key); setSortDir('asc'); }
    else if (sortDir === 'asc') setSortDir('desc');
    else { setSortKey(null); setSortDir(null); }
    setPage(1);
  };

  const SortIcon = ({ colKey }: { colKey: string }) => {
    if (sortKey !== colKey) return <ChevronsUpDown className="h-3 w-3 opacity-30" />;
    if (sortDir === 'asc') return <ChevronUp className="h-3 w-3 text-sky-500" />;
    return <ChevronDown className="h-3 w-3 text-sky-500" />;
  };

  const TableHeader = () => (
    <thead>
      <tr className="border-b border-[#F1F5F9]" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
        {columns.map((col) => (
          <th
            key={col.key}
            style={{ width: col.width }}
            className={cn(
              'px-4 py-3 text-left',
              'text-[10px] font-bold uppercase tracking-[0.08em] text-[#64748B]',
              col.sortable && 'cursor-pointer select-none hover:text-[#374151] transition-colors',
              col.align === 'right' && 'text-right',
              col.align === 'center' && 'text-center'
            )}
            onClick={col.sortable ? () => handleSort(col.key) : undefined}
            aria-sort={sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
          >
            <span className="inline-flex items-center gap-1.5">
              {col.header}
              {col.sortable && <SortIcon colKey={col.key} />}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );

  const rowClasses = (idx: number) => cn(
    'border-b border-[#F8FAFC] transition-colors duration-100',
    onRowClick && 'cursor-pointer',
    onRowClick && 'hover:bg-gradient-to-r hover:from-sky-50/50 hover:to-transparent',
    idx % 2 === 1 && 'bg-[#FAFBFF]',
  );

  if (isLoading) {
    return (
      <div className={cn('overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]', className)}>
        <table className="w-full text-sm">
          <TableHeader />
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className={cn('border-b border-[#F8FAFC]', i % 2 === 1 && 'bg-[#FAFBFF]')}>
                {columns.map((col, ci) => (
                  <td key={col.key} className="px-4 py-3.5">
                    <div className="skeleton h-3.5 rounded" style={{ width: `${50 + ((i * 7 + ci * 13) % 45)}%` }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={cn('overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]', className)}>
        <table className="w-full text-sm"><TableHeader /></table>
        <div className="py-16 flex items-center justify-center">
          {emptyState ?? <p className="text-sm text-[#94A3B8]">No data available.</p>}
        </div>
      </div>
    );
  }

  if (virtualized) {
    return (
      <div className={cn('overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]', className)}>
        <table className="w-full text-sm" style={{ tableLayout: 'fixed' }}>
          <TableHeader />
        </table>
        <div ref={parentRef} style={{ height: maxHeight, overflow: 'auto' }} className="relative">
          <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = sorted[virtualRow.index];
              return (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={rowVirtualizer.measureElement}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', transform: `translateY(${virtualRow.start}px)` }}
                >
                  <table className="w-full text-sm" style={{ tableLayout: 'fixed' }}>
                    <tbody>
                      <tr
                        className={rowClasses(virtualRow.index)}
                        onClick={() => onRowClick?.(row)}
                      >
                        {columns.map((col) => (
                          <td key={col.key} style={{ width: col.width }}
                            className={cn('px-4 py-3 text-[13px] text-[#374151]', col.align === 'right' && 'text-right', col.align === 'center' && 'text-center')}>
                            {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 px-5 py-2.5 border-t border-[#F1F5F9] bg-[#FAFBFF]">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-[#64748B]">
              {sorted.length.toLocaleString()} rows · virtualised
            </span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]', className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <TableHeader />
          <tbody>
            {paginated.map((row, idx) => (
              <tr key={idx} className={rowClasses(idx)} onClick={() => onRowClick?.(row)}>
                {columns.map((col) => (
                  <td key={col.key} style={{ width: col.width }}
                    className={cn('px-4 py-3.5 text-[13px] text-[#374151]', col.align === 'right' && 'text-right', col.align === 'center' && 'text-center')}>
                    {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-[#F1F5F9] bg-[#FAFBFF] px-5 py-3">
          <span className="text-[11px] text-[#64748B] font-medium">
            Showing <span className="text-[#374151] font-bold">{((page - 1) * pageSize) + 1}–{Math.min(page * pageSize, sorted.length)}</span> of <span className="text-[#374151] font-bold">{sorted.length}</span>
          </span>
          <div className="flex items-center gap-1">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              className="h-7 w-7 inline-flex items-center justify-center rounded-lg text-sm border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] hover:border-[#CBD5E1] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page">‹</button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)}
                className={cn(
                  'h-7 w-7 inline-flex items-center justify-center rounded-lg text-[12px] font-semibold border transition-all',
                  page === p
                    ? 'border-sky-500 bg-sky-500 text-white shadow-[0_2px_8px_rgba(14,165,233,0.35)]'
                    : 'border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] hover:border-[#CBD5E1] text-[#374151]'
                )}
                aria-label={`Page ${p}`} aria-current={page === p ? 'page' : undefined}>{p}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="h-7 w-7 inline-flex items-center justify-center rounded-lg text-sm border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] hover:border-[#CBD5E1] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page">›</button>
          </div>
        </div>
      )}
    </div>
  );
}

DataTable.displayName = 'DataTable';

export { DataTable };
