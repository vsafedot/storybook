# FlexPrice Storybook Component Library

A hosted Storybook component library extracted from the [FlexPrice](https://admin.flexprice.io) billing infrastructure platform.

## 🚀 Live Demo

[View Storybook →](#) (https://storybook-anqu.vercel.app/?path=/docs/atoms-badge--docs)

## 📦 Components

### Atoms (6)
| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, danger, outline — sm/md/lg sizes, loading state |
| `Badge` | Status chips with color variants (success, warning, danger, info, muted) |
| `Input` | Text/number input with label, error state, currency prefix, sizes |
| `Select` | Single-select dropdown with optional search |
| `Tooltip` | Informational tooltip (top/right/bottom/left) with configurable delay |
| `Spinner` | Loading spinner in sm/md/lg, with full-page overlay mode |

### Molecules (6)
| Component | Description |
|-----------|-------------|
| `MetricCard` | KPI card with value, label, trend indicator, icon |
| `DataTable` | Sortable, paginated, with skeleton, empty state, and **virtualisation** (10k rows) |
| `InvoiceStatusBadge` | Maps invoice status → colored Badge with icon |
| `UsageBar` | Progress bar showing used vs. entitled units, color-coded by threshold |
| `DateRangePicker` | Popover date range picker with quick presets |
| `SearchBar` | Search input with debounce and clear button |

### Organisms (3)
| Component | Description |
|-----------|-------------|
| `SidebarNav` | Dark sidebar with collapsible, active highlighting, badges, sections |
| `PricingTierTable` | Flat / tiered / graduated / volume pricing display |
| `EmptyState` | Full-page, card, or inline empty state with CTA buttons |

## ⚡ Advanced Features

### Challenge A — useFilterStore (Zustand)
- Persists per-route filter state in `sessionStorage`
- API: `setFilter(key, value)`, `resetFilters()`, `getFilters()`
- URL fingerprint sync (`?filters=N` for bookmarkability)

### Challenge B — Virtualised DataTable
- `@tanstack/react-virtual` integration
- 10,000 mock rows scrolling smoothly
- Dynamic row height estimation

### Challenge C — createQueryConfig (TanStack Query)
- `REALTIME`, `DEFAULT`, `STATIC` presets
- Global defaults: 5-min staleTime, 10-min gcTime
- Per-call override support

## 🧪 Tests

```bash
npm run test         # Run all 48 unit + component tests
npm run test:ui      # Open Vitest UI
```

Test coverage:
- 21 utility unit tests (`formatCurrency`, `invoiceStatusToLabel`, `calculateTierPrice`, etc.)
- 21 component render tests (Button, Input, Badge, InvoiceStatusBadge, UsageBar)
- 6 queryConfig unit tests

## 🏃 Development

```bash
npm install
npm run storybook    # Start Storybook at localhost:6006
npm run dev          # Vite dev server at localhost:3000
```

## 🏗️ Build

```bash
npm run build-storybook   # Outputs to storybook-static/
npm run build             # Vite production build
```

## 🎨 Design System

Matches FlexPrice's production design tokens:
- **Primary blue**: `#3293D9`
- **Sidebar dark**: `#0F172A`
- **Font**: Inter
- **Border radius**: 4-8px (flat professional look)
- **Card shadows**: Subtle ambient shadows tinted with sidebar dark

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/         # Button, Badge, Input, Select, Tooltip, Spinner
│   ├── molecules/     # MetricCard, DataTable, InvoiceStatusBadge, UsageBar, SearchBar, DateRangePicker
│   └── organisms/     # SidebarNav, PricingTierTable, EmptyState
├── hooks/
│   └── useFilterStore.ts   # Zustand filter persistence (Challenge A)
├── lib/
│   ├── utils.ts            # cn() class merger
│   ├── formatters.ts       # Currency, status, tier pricing utilities
│   └── queryConfig.ts      # TanStack Query presets (Challenge C)
├── styles/
│   └── globals.css         # CSS custom properties + Tailwind
└── tests/
    ├── utils.test.ts        # Utility function tests
    ├── components.test.tsx  # Component render tests
    └── queryConfig.test.ts  # Query config tests
```
