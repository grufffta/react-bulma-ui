export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Size = 'small' | 'default' | 'normal' | 'medium' | 'large'
export type TextSize = 1 | 2 | 3 | 4 | 5 | 6

export function getSizeStyle(size?: Size) {
  return { [`is-${size}`]: size !== undefined && size !== 'default' }
}