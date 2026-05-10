import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import {
  LayoutDashboard, LayoutGrid, Users, CreditCard,
  FileText, Wallet, BarChart3, Settings, Bell,
} from 'lucide-react';
import { SidebarNav, type NavItem } from './SidebarNav';

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { label: 'Plans', icon: <LayoutGrid />, path: '/plans' },
  { label: 'Customers', icon: <Users />, path: '/customers', badge: 3 },
  { label: 'Subscriptions', icon: <CreditCard />, path: '/subscriptions' },
  { label: 'Invoices', icon: <FileText />, path: '/invoices', badge: 12 },
  { label: 'Credits', icon: <Wallet />, path: '/credits' },
  { label: 'Usage', icon: <BarChart3 />, path: '/usage' },
];

const navItemsWithSections: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard', section: '' },
  { label: 'Plans', icon: <LayoutGrid />, path: '/plans', section: 'Billing' },
  { label: 'Customers', icon: <Users />, path: '/customers', section: 'Billing' },
  { label: 'Subscriptions', icon: <CreditCard />, path: '/subscriptions', section: 'Billing' },
  { label: 'Invoices', icon: <FileText />, path: '/invoices', section: 'Billing', badge: 12 },
  { label: 'Credits', icon: <Wallet />, path: '/credits', section: 'Billing' },
  { label: 'Usage', icon: <BarChart3 />, path: '/usage', section: 'Analytics' },
  { label: 'Settings', icon: <Settings />, path: '/settings', section: 'System' },
  { label: 'Notifications', icon: <Bell />, path: '/notifications', section: 'System', badge: 4 },
];

const meta: Meta<typeof SidebarNav> = {
  title: 'Organisms/SidebarNav',
  component: SidebarNav,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    activePath: { control: 'text' },
    collapsed: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex">
        <Story />
        <div className="flex-1 bg-[#F8FAFC] p-8">
          <p className="text-sm text-gray-400">← Main content area</p>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

export const Default: Story = {
  args: {
    items: navItems,
    activePath: '/dashboard',
    onCollapse: fn(),
    onNavigate: fn(),
  },
};

export const ActiveInvoices: Story = {
  args: {
    items: navItems,
    activePath: '/invoices',
    onCollapse: fn(),
    onNavigate: fn(),
  },
};

export const Collapsed: Story = {
  args: {
    items: navItems,
    activePath: '/dashboard',
    collapsed: true,
    onCollapse: fn(),
    onNavigate: fn(),
  },
};

export const WithSections: Story = {
  args: {
    items: navItemsWithSections,
    activePath: '/invoices',
    onCollapse: fn(),
    onNavigate: fn(),
  },
};

export const WithBadges: Story = {
  args: {
    items: navItems,
    activePath: '/customers',
    onCollapse: fn(),
    onNavigate: fn(),
  },
};

export const CollapsibleDemo: Story = {
  render: (args) => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
      <div className="h-screen flex">
        <SidebarNav {...args} collapsed={collapsed} onCollapse={setCollapsed} />
        <div className="flex-1 bg-[#F8FAFC] p-8">
          <p className="text-sm text-gray-500">
            {collapsed ? 'Sidebar is collapsed' : 'Sidebar is expanded'} — click the toggle button below the nav
          </p>
        </div>
      </div>
    );
  },
  args: {
    items: navItems,
    activePath: '/dashboard',
    onNavigate: fn(),
  },
};
