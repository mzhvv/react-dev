// src/shared/ui/button.stories.jsx

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { userEvent, within } from '@storybook/test'

const meta: Meta<typeof Button> = {
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

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // 1️⃣ Клик (логируется через action)
    await userEvent.click(button)

    // 2️⃣ Ховер
    await userEvent.hover(button)
    // Можно проверять стили через canvasElement / кнопки
    const style = getComputedStyle(button)
    console.log('Cursor on hover:', style.cursor) // для отладки
    await userEvent.unhover(button)
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
