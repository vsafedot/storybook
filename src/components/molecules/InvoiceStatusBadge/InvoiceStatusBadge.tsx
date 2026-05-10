import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/atoms/Badge/Badge';
import type { InvoiceStatus } from '@/lib/formatters';
import { invoiceStatusToLabel } from '@/lib/formatters';
import { CheckCircle, Clock, XCircle, FileText, AlertCircle } from 'lucide-react';

/**
 * InvoiceStatusBadge component for FlexPrice UI.
 *
 * Maps an invoice status string to a colored Badge chip with an appropriate icon.
 * Status mapping:
 * - paid     → green (success)
 * - pending  → amber (warning)
 * - overdue  → dark red (danger)
 * - void     → red (danger)
 * - draft    → slate (muted)
 *
 * @prop status - The invoice status code
 * @prop showIcon - Whether to show the icon (default: true)
 * @prop size - Badge size: 'sm' | 'md'
 */

export interface InvoiceStatusBadgeProps {
  status: InvoiceStatus;
  showIcon?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const statusConfig: Record<
  InvoiceStatus,
  { variant: 'success' | 'warning' | 'danger' | 'muted'; Icon: React.ElementType }
> = {
  paid: { variant: 'success', Icon: CheckCircle },
  pending: { variant: 'warning', Icon: Clock },
  overdue: { variant: 'danger', Icon: AlertCircle },
  void: { variant: 'danger', Icon: XCircle },
  draft: { variant: 'muted', Icon: FileText },
};

const InvoiceStatusBadge = ({
  status,
  showIcon = true,
  size = 'md',
  className,
}: InvoiceStatusBadgeProps) => {
  const config = statusConfig[status] ?? statusConfig.draft;
  const { variant, Icon } = config;

  return (
    <Badge
      variant={variant}
      size={size}
      icon={showIcon ? <Icon /> : undefined}
      className={cn(className)}
    >
      {invoiceStatusToLabel(status)}
    </Badge>
  );
};

InvoiceStatusBadge.displayName = 'InvoiceStatusBadge';

export { InvoiceStatusBadge };
