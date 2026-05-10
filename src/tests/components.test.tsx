import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/atoms/Button/Button';
import { Input } from '@/components/atoms/Input/Input';
import { Badge } from '@/components/atoms/Badge/Badge';
import { InvoiceStatusBadge } from '@/components/molecules/InvoiceStatusBadge/InvoiceStatusBadge';
import { UsageBar } from '@/components/molecules/UsageBar/UsageBar';

describe('Button Component', () => {
  it('renders with correct label', () => {
    render(<Button>Create Plan</Button>);
    expect(screen.getByRole('button', { name: 'Create Plan' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled and aria-busy when loading', () => {
    render(<Button isLoading>Saving</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>No click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});

describe('Input Component', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('renders label correctly', () => {
    render(<Input label="Email Address" />);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
  });

  it('has aria-invalid when error is set', () => {
    render(<Input error="Required" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('fires onChange on typing', () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

describe('Badge Component', () => {
  it('renders with correct text', () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies success variant class', () => {
    render(<Badge variant="success">Active</Badge>);
    const badge = screen.getByText('Active');
    expect(badge).toHaveClass('text-emerald-700');
  });

  it('applies danger variant class', () => {
    render(<Badge variant="danger">Void</Badge>);
    const badge = screen.getByText('Void');
    expect(badge).toHaveClass('text-red-700');
  });

  it('renders dot when dot prop is true', () => {
    const { container } = render(<Badge variant="success" dot>Active</Badge>);
    // dot is a span with rounded-full class
    const dots = container.querySelectorAll('.rounded-full');
    expect(dots.length).toBeGreaterThan(0);
  });
});

describe('InvoiceStatusBadge Component', () => {
  it('renders Paid status', () => {
    render(<InvoiceStatusBadge status="paid" />);
    expect(screen.getByText('Paid')).toBeInTheDocument();
  });

  it('renders Draft status', () => {
    render(<InvoiceStatusBadge status="draft" />);
    expect(screen.getByText('Draft')).toBeInTheDocument();
  });

  it('renders Overdue status', () => {
    render(<InvoiceStatusBadge status="overdue" />);
    expect(screen.getByText('Overdue')).toBeInTheDocument();
  });
});

describe('UsageBar Component', () => {
  it('renders label', () => {
    render(<UsageBar label="API Calls" used={500} total={1000} />);
    expect(screen.getByText('API Calls')).toBeInTheDocument();
  });

  it('renders as progressbar with correct aria values', () => {
    render(<UsageBar label="Storage" used={80} total={100} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '80');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('shows limit warning when at 100%', () => {
    render(<UsageBar label="Calls" used={1000} total={1000} />);
    expect(screen.getByText('LIMIT')).toBeInTheDocument();
  });
});
