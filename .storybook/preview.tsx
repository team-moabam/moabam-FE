import React from 'react';
import type { Preview } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
// import { initialize, mswLoader } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-react-router-v6';
import queryClient from '../src/core/api/queryClient';
import 'swiper/css';
import 'swiper/css/bundle';
import '../src/main.css';

// initialize();

const preview: Preview = {
  // loaders: [mswLoader],
  decorators: [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
