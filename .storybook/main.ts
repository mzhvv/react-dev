// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',

    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-interactions',
    // "@storybook/addon-onboarding",
    // '@storybook/addon-vitest',
    '@storybook/react-vite',
    // '@storybook/test', // конфликт c '@storybook/addon-interactions',
    // '@storybook/test-runner',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}
export default config
