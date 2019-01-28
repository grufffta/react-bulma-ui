import './form.scss'
import React, { FunctionComponent, ChangeEvent } from 'react'
import classnames from 'classnames'
import { Control, FormStateProps } from './';
import { Color, Size, getControlStyle, controlCommonProps } from '../../props';

interface TextAreaOwnProps extends FormStateProps {
  name?: string
  bind?: boolean | 'on-input'
  placeholder?: string
  rows?: number
  color?: Color
  size?: Size
  text?: string
  fixedSize?: boolean
  onchange?: (event: ChangeEvent) => void
}

export const TextArea: FunctionComponent<TextAreaOwnProps> = (props) => (
  <Control { ...props }>
    <textarea id={ props.name } placeholder={ props.placeholder }
      className={ classnames('textarea', getControlStyle(props), { 'has-fixed-size': props.fixedSize }) }
      rows={ props.rows }
      defaultValue={ props.text } { ...controlCommonProps(props) } />
  </Control>
)
