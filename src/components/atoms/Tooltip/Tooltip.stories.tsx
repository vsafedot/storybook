import type { Meta, StoryObj } from '@storybook/react';
import { Info, HelpCircle, AlertTriangle } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    delay: { control: 'number', description: 'Delay in ms before showing' },
  },
  args: {
    content: 'This is a helpful tooltip',
    side: 'top',
    delay: 400,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Tooltip {...args}>
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 place-items-center p-12">
      <Tooltip content="Top tooltip" side="top">
        <Button variant="ghost" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button variant="ghost" size="sm">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="ghost" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button variant="ghost" size="sm">Left</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="flex justify-center p-8">
      <Tooltip content="Shows after 1 second delay" delay={1000}>
        <Button variant="secondary">Slow tooltip (1s delay)</Button>
      </Tooltip>
    </div>
  ),
};

export const OnIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-8">
      <span className="text-sm text-gray-700">Usage limit</span>
      <Tooltip content="Your plan allows up to 10,000 API calls per month. Exceeding this will incur overage charges.">
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Info className="h-4 w-4" />
        </button>
      </Tooltip>
    </div>
  ),
};

export const HelpTooltip: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-8">
      <span className="text-sm font-medium text-gray-700">Proration</span>
      <Tooltip content="When enabled, subscription changes mid-cycle are prorated automatically.">
        <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
      </Tooltip>
    </div>
  ),
};
