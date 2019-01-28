import './form.scss'
import React, { FunctionComponent, ChangeEvent, FormEvent, cloneElement } from 'react'
import { Color, Size, getControlStyle } from '../../props'
import { Icon, IconElement, IconOwnProps } from '../Elements';
import classnames from 'classnames'

export interface FormStateProps {
  hovered?: boolean
  focused?: boolean
  loading?: boolean
  disabled?: boolean
  readonly?: boolean
}

export interface ControlOwnProps extends FormStateProps {
  name?: string
  iconLeft?: IconElement
  iconRight?: IconElement
  value?: string
  color?: Color
  size?: Size
  static?: boolean
  required?: boolean
  placeholder?: string
  expanded?: boolean
  rounded?: boolean
  help?: string
  helpColor?: Color
  onClick?: () => void
  onChange?: (event: ChangeEvent) => void
  onInput?: (event: FormEvent) => void
}

export const Control: FunctionComponent<ControlOwnProps> = (props) => {
  return <div className={ classnames('control', getControlStyle(props),
    { 'is-expanded': props.expanded },
    { 'has-icons-left': props.iconLeft },
    { 'has-icons-right': props.iconRight }) }>
    { props.children }
    { props.iconLeft && cloneElement(props.iconLeft, { position: 'left' }) }
    { props.iconRight && cloneElement(props.iconRight, { position: 'right' }) }
  </div>
}

