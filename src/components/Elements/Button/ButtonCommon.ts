import classnames from 'classnames'
import { Size, getColorStyle, getSizeStyle, StandardColor } from '../../../props'

interface ButtonStyleOwnProps {
  /** button color */
  color?: StandardColor
  /** button size */
  size?: Size
  /** expand button to full width */
  fullwidth?: boolean
  /** invert button colors */
  inverted?: boolean
  /** outlined button */
  outlined?: boolean
  /** rounded button */
  rounded?: boolean
  /** is the button selected */
  selected?: boolean
}

interface ButtonStateOwnProps {
  /** button is hovered state */
  hovered?: boolean
  /** button focused state */
  focused?: boolean
  /** button active state */
  active?: boolean
}

export interface ButtonCommonProps extends ButtonStyleOwnProps, ButtonStateOwnProps {
  /** static button */
  static?: boolean
  /** disabled button */
  disabled?: boolean
  /** on button click action */
  onClick?: () => void
}

export function getCommonStyle(props: ButtonCommonProps) {
  return classnames('button',
    getButtonStyle(props),
    getButtonStateStyle(props),
    { 'is-static': props.static })
}

function getButtonStyle(props: ButtonStyleOwnProps) {
  return [
    getColorStyle(props.color),
    getSizeStyle(props.size),
    { 'is-outlined': props.outlined },
    { 'is-inverted': props.inverted },
    { 'is-rounded': props.rounded },
    { 'is-fullwidth': props.fullwidth },
    { 'is-selected': props.selected }
  ]
}

function getButtonStateStyle(props: ButtonStateOwnProps) {
  return [
    { 'is-hovered': props.hovered },
    { 'is-focussed': props.focused },
    { 'is-active': props.active },
  ]
}