import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Plus, Download, Trash2 } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'outline'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height and padding of the button',
    },
    isLoading: { control: 'boolean', description: 'Shows spinner and disables button' },
    disabled: { control: 'boolean', description: 'Disables interaction' },
    children: { control: 'text', description: 'Button label' },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { variant: 'primary', size: 'md' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="danger">Danger</Button>
      <Button {...args} variant="outline">Outline</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { isLoading: true, children: 'Saving...' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLeftIcon: Story = {
  args: { leftIcon: <Plus className="h-4 w-4" />, children: 'Create Plan' },
};

export const WithRightIcon: Story = {
  args: { rightIcon: <Download className="h-4 w-4" />, children: 'Export CSV' },
};

export const DangerWithIcon: Story = {
  args: { variant: 'danger', leftIcon: <Trash2 className="h-4 w-4" />, children: 'Delete Customer' },
};
