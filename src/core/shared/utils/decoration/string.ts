// src/core/shared/utils/decoration/string.ts

// #region Spaces

export function spaces(count: number): string {
  return ' '.repeat(count)
}

export function spacesDash(count: number = 1): string {
  return spaces(count) + '- '
}

export function spacesBullet(count: number = 1): string {
  return spaces(count) + '• '
}

// #endregion

// #region Tab

export function tab(count: number): string {
  return '  '.repeat(count)
}

export function tabDash(count: number = 1): string {
  return tab(count) + '- '
}

export function tabBullet(count: number = 1): string {
  return tab(count) + '• '
}

// #endregion
