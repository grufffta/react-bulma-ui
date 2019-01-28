export type Color = 'normal' | 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger'
export type AdditionalColor = | 'white' | 'light' | 'dark' | 'black' | 'text'
export type AdditionalColorShade = 'black-bis' | 'black-ter' | 'grey' | 'grey-darker' | 'grey-dark' | 'grey-light' | 'grey-lighter' | 'white-ter' | 'white-bis'
export type StandardColor = Color | AdditionalColor
export type ElementColor = Color | AdditionalColor | AdditionalColorShade

export function getColorStyle(color?: StandardColor) {
  return { [`is-${color}`]: color !== undefined }
}

export function getTextColorStyle(color?: ElementColor) {
  return { [`has-text-${color}`]: color !== undefined }
}

export function getBackgroundColorStyle(color?: ElementColor) {
  return { [`has-background-color-${color}`]: color !== undefined }
}