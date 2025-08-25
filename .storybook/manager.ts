import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Colors',
    brandUrl: 'https://flightlesslabs.github.io/colors',
    brandTarget: '_self',
    fontBase: '"Nunito", sans-serif',
  },
});
