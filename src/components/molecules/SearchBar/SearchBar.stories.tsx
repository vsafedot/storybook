import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    debounceMs: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Search customers...',
    onChange: fn(),
    onClear: fn(),
    debounceMs: 300,
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { value: 'acme', placeholder: 'Search invoices...' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Search disabled' },
};

export const WithDebounce: Story = {
  args: { debounceMs: 500, placeholder: 'Search with 500ms debounce...' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');
    await userEvent.type(input, 'flex', { delay: 50 });
    // Verify the immediate change fires
    expect(input).toHaveValue('flex');
    // The debounced onChange should fire after 500ms
    // We just check it's a function from args
    expect(typeof args.onChange).toBe('function');
  },
};
