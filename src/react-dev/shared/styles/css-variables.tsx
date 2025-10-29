// src/react-dev/shared/styles/css-variables.tsx

import type { Color } from '@react-dev/features/theme'

export const cssVariables = {
  '--primary-light-neutral': 'oklch(0.205 0 0)',
  '--ring-light-neutral': 'oklch(0.708 0 0)',
  '--primary-dark-neutral': 'oklch(0.922 0 0)',
  '--ring-dark-neutral': 'oklch(0.556 0 0)',

  '--primary-light-blue': 'oklch(0.623 0.214 259.815)',
  '--ring-light-blue': 'oklch(0.623 0.214 259.815)',
  '--primary-dark-blue': 'oklch(0.546 0.245 262.881)',
  '--ring-dark-blue': 'oklch(0.488 0.243 264.376)',
} as React.CSSProperties

export const colorMap = {
  neutral:
    'bg-[var(--primary-light-neutral)] dark:bg-[var(--primary-dark-neutral)] data-[state=checked]:bg-[var(--primary-light-neutral)] dark:data-[state=checked]:bg-[var(--primary-dark-neutral)]',
  blue: 'bg-[var(--primary-light-blue)] dark:bg-[var(--primary-dark-blue)] data-[state=checked]:bg-[var(--primary-light-blue)] dark:data-[state=checked]:bg-[var(--primary-dark-blue)]',
} as const satisfies Record<Color, string>

// const colorMap = {
//   neutral:
//     'bg-[#171717] dark:bg-[#e5e5e5] data-[state=checked]:bg-[#171717] dark:data-[state=checked]:bg-[#e5e5e5] ', // focus-visible:ring-[#a1a1a1]/50 dark:focus-visible:ring-[#737373]/50
//   blue: 'bg-[#2b7fff] dark:bg-[#155dfb] data-[state=checked]:bg-[#2b7fff] dark:data-[state=checked]:bg-[#155dfb] ', //focus-visible:ring-[#2b7fff]/50 dark:focus-visible:ring-[#1447e6]/50
// } as const satisfies Record<Color, string>
