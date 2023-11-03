import type { Preview } from '@storybook/react';
import 'swiper/css';
import 'swiper/css/bundle';
import '../src/main.css';

const preview: Preview = {
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
