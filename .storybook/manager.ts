import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // Brand
  brandTitle: 'FlexPrice',
  brandUrl: 'https://flexprice.io',
  brandTarget: '_blank',

  // UI
  colorPrimary: '#3293D9',
  colorSecondary: '#3293D9',

  // App chrome
  appBg: '#0D1421',
  appContentBg: '#111827',
  appPreviewBg: '#F1F5F9',
  appBorderColor: 'rgba(255,255,255,0.06)',
  appBorderRadius: 8,

  // Sidebar
  sidebarBg: '#0D1421',
  sidebarBorderColor: 'rgba(255,255,255,0.06)',

  // Text
  textColor: '#CBD5E1',
  textInverseColor: '#0F172A',
  textMutedColor: '#475569',

  // Toolbar
  barBg: '#111827',
  barTextColor: '#94A3B8',
  barSelectedColor: '#3293D9',
  barHoverColor: '#CBD5E1',

  // Inputs
  inputBg: '#1E293B',
  inputBorder: 'rgba(255,255,255,0.1)',
  inputTextColor: '#E2E8F0',
  inputBorderRadius: 6,

  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
