import './form.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { ControlOwnProps, Control, Help } from './';
import { getInputControlStyle, controlCommonProps } from '../../props';

export interface InputOwnProps extends ControlOwnProps {
  type: 'button' | 'color' | 'date' | 'email' | 'hidden' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
  horizontal?: boolean
  pattern?: string
  title?: string
}

export const Input: FunctionComponent<InputOwnProps> = (props) => (
  <Control { ...props }>
    <input id={ props.name } type={ props.type } placeholder={ props.placeholder }
      className={ classnames(getInputControlStyle(props),
        { 'button': props.type === 'button' }) }
      pattern={ props.pattern } title={ props.title }
      defaultValue={ props.value }  { ...controlCommonProps(props) } />
    <Help color={ props.helpColor } text={ props.help } />
  </Control>)

