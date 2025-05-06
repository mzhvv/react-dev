// src/shared/ui/button.stories.jsx

import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'link2'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    onClick: { action: 'clicked' },
  },
}

export const Default = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
}

export const Destructive = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}

export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Ghost = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Link = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

export const Link2 = {
  args: {
    children: 'Link2 Button',
    variant: 'link2',
  },
}

// Пример с разными размерами
export const Small = {
  args: {
    children: 'Small Button',
    variant: 'default',
    size: 'sm',
  },
}

export const Large = {
  args: {
    children: 'Large Button',
    variant: 'default',
    size: 'lg',
  },
}
