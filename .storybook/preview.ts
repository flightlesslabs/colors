import type { Preview } from '@storybook/sveltekit';
import { themes } from 'storybook/theming';
import './global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Set the initial theme
      current: 'light',
      // Override the default dark theme
      dark: themes.dark,
      // Override the default light theme
      light: themes.light,
      stylePreview: true,
      darkClass: ['dodo-theme--dark'],
      lightClass: ['dodo-theme--light'],
    },
    options: {
      storySort: {
        order: ['Home'],
      },
    },
  },
};

export default preview;
