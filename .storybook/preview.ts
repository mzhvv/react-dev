// .storybook/preview.ts

import type { Preview } from '@storybook/react-vite'
import '../src/app/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo', // error | off
    },
  },
}

export default preview
