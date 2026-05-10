import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'subtle',
      values: [
        { name: 'subtle', value: '#F1F5F9' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#0F172A' },
        { name: 'gradient', value: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)' },
      ],
    },
    layout: 'padded',
    docs: {
      story: { inline: true },
    },
  },
  decorators: [
    (Story) => (
      React.createElement('div', {
        style: {
          fontFamily: "'Inter', system-ui, sans-serif",
          WebkitFontSmoothing: 'antialiased',
        }
      }, React.createElement(Story))
    ),
  ],
};

export default preview;
