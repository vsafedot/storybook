import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceStatusBadge } from './InvoiceStatusBadge';
import type { InvoiceStatus } from '@/lib/formatters';

const meta: Meta<typeof InvoiceStatusBadge> = {
  title: 'Molecules/InvoiceStatusBadge',
  component: InvoiceStatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['draft', 'pending', 'paid', 'void', 'overdue'],
      description: 'Invoice status code',
    },
    showIcon: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: { status: 'paid', showIcon: true, size: 'md' },
};

export default meta;
type Story = StoryObj<typeof InvoiceStatusBadge>;

export const Default: Story = {};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      {(['paid', 'pending', 'overdue', 'void', 'draft'] as InvoiceStatus[]).map((status) => (
        <InvoiceStatusBadge key={status} status={status} />
      ))}
    </div>
  ),
};

export const WithoutIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      {(['paid', 'pending', 'overdue', 'void', 'draft'] as InvoiceStatus[]).map((status) => (
        <InvoiceStatusBadge key={status} status={status} showIcon={false} />
      ))}
    </div>
  ),
};

export const InTable: Story = {
  render: () => (
    <table className="w-full text-sm border rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-50 border-b">
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Invoice</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Amount</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { id: 'INV-001', customer: 'Acme Corp', amount: '$1,200', status: 'paid' as InvoiceStatus },
          { id: 'INV-002', customer: 'Globex Inc', amount: '$850', status: 'pending' as InvoiceStatus },
          { id: 'INV-003', customer: 'Initech', amount: '$2,100', status: 'void' as InvoiceStatus },
          { id: 'INV-004', customer: 'Umbrella Co', amount: '$300', status: 'draft' as InvoiceStatus },
          { id: 'INV-005', customer: 'Dunder Mifflin', amount: '$4,500', status: 'overdue' as InvoiceStatus },
        ].map((row) => (
          <tr key={row.id} className="border-b last:border-0 hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-blue-600">{row.id}</td>
            <td className="px-4 py-3 text-gray-700">{row.customer}</td>
            <td className="px-4 py-3 tabular-nums font-medium">{row.amount}</td>
            <td className="px-4 py-3"><InvoiceStatusBadge status={row.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
