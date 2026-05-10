import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InvoiceStatusBadge } from '@/components/molecules/InvoiceStatusBadge/InvoiceStatusBadge';
import { DataTable, type ColumnDef } from './DataTable';
import type { InvoiceStatus } from '@/lib/formatters';

// Mock data
const mockInvoices = [
  { id: 'INV-001', customer: 'Acme Corp', amount: '$1,200.00', status: 'paid' as InvoiceStatus, date: 'Oct 12, 2024' },
  { id: 'INV-002', customer: 'Globex Inc', amount: '$850.00', status: 'pending' as InvoiceStatus, date: 'Oct 11, 2024' },
  { id: 'INV-003', customer: 'Initech', amount: '$2,100.00', status: 'void' as InvoiceStatus, date: 'Oct 10, 2024' },
  { id: 'INV-004', customer: 'Umbrella Co', amount: '$300.00', status: 'draft' as InvoiceStatus, date: 'Oct 9, 2024' },
  { id: 'INV-005', customer: 'Dunder Mifflin', amount: '$4,500.00', status: 'overdue' as InvoiceStatus, date: 'Oct 8, 2024' },
  { id: 'INV-006', customer: 'Pied Piper', amount: '$720.00', status: 'paid' as InvoiceStatus, date: 'Oct 7, 2024' },
  { id: 'INV-007', customer: 'Hooli', amount: '$9,800.00', status: 'paid' as InvoiceStatus, date: 'Oct 6, 2024' },
  { id: 'INV-008', customer: 'Aviato', amount: '$150.00', status: 'pending' as InvoiceStatus, date: 'Oct 5, 2024' },
];

const invoiceColumns: ColumnDef[] = [
  {
    key: 'id',
    header: 'Invoice',
    sortable: true,
    render: (v) => <span className="font-medium text-primary text-xs">{String(v)}</span>,
  },
  { key: 'customer', header: 'Customer', sortable: true },
  { key: 'amount', header: 'Amount', sortable: true, align: 'right' },
  {
    key: 'status',
    header: 'Status',
    render: (v) => <InvoiceStatusBadge status={v as InvoiceStatus} />,
  },
  { key: 'date', header: 'Date', sortable: true },
];

// 10,000 virtual rows
const virtualData = Array.from({ length: 10_000 }, (_, i) => ({
  id: `CUST-${String(i + 1).padStart(5, '0')}`,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@example.com`,
  plan: ['Starter', 'Growth', 'Business', 'Enterprise'][i % 4],
  mrr: `$${((i * 17 + 99) % 9900 + 100).toFixed(2)}`,
  status: ['active', 'trialing', 'cancelled'][i % 3],
}));

const virtualColumns: ColumnDef[] = [
  { key: 'id', header: 'ID', sortable: true, width: '120px' },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'plan', header: 'Plan', sortable: true },
  { key: 'mrr', header: 'MRR', sortable: true, align: 'right' },
  { key: 'status', header: 'Status' },
];

const meta: Meta<typeof DataTable> = {
  title: 'Molecules/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    isLoading: { control: 'boolean' },
    virtualized: { control: 'boolean' },
    pageSize: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    columns: invoiceColumns,
    data: mockInvoices,
    pageSize: 5,
    onRowClick: fn(),
  },
};

export const LoadingSkeleton: Story = {
  args: {
    columns: invoiceColumns,
    data: [],
    isLoading: true,
  },
};

export const EmptyState: Story = {
  args: {
    columns: invoiceColumns,
    data: [],
    emptyState: (
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700">No invoices found</p>
        <p className="text-xs text-gray-400 mt-1">Create your first invoice to get started.</p>
      </div>
    ),
  },
};

export const Sortable: Story = {
  args: {
    columns: invoiceColumns,
    data: mockInvoices,
    pageSize: 8,
  },
};

export const Virtualised: Story = {
  args: {
    columns: virtualColumns,
    data: virtualData,
    virtualized: true,
    maxHeight: '500px',
    rowHeight: 48,
  },
  parameters: {
    docs: {
      description: {
        story: 'Virtualised table rendering 10,000 rows using @tanstack/react-virtual. Only visible rows are in the DOM.',
      },
    },
  },
};
