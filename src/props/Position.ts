export type Position = 'left' | 'centered' | 'right'
export type VerticalAlignment = 'top' | 'center' | 'bottom'

export function getPositionStyle(position?: Position) {
  return { [`is-${position}`]: position !== undefined && position !== 'left' }
}
