import type { Preview } from "@storybook/react";
import "../src/global.css";
import { themes } from "@storybook/theming";  

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',  
      dark: { ...themes.dark },
      light: { ...themes.light },
    },
  },
};

export default preview;
