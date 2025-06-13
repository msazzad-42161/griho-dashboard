import type { Preview } from "@storybook/react";
import '../src/index.css'

import { withThemeByClassName, withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          nameOfTheme: 'data-mode',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  }),
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
]
};

export default preview;
