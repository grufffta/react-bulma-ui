import './form.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { ControlOwnProps, Control, Help } from './'
import { getSizeStyle, getColorStyle, controlCommonProps } from '../../props'

interface SelectInputControlOwnProps extends ControlOwnProps {
  multiple?: boolean
  rows?: number
  fullWidth?: boolean
}

export const Select: FunctionComponent<SelectInputControlOwnProps> = (props) => (
  <Control { ...props } expanded={ props.fullWidth }>
    <span className={ classnames('select', getSizeStyle(props.size), getColorStyle(props.color),
      { 'is-multiple': props.multiple },
      { 'is-fullwidth': props.fullWidth }) }>
      <select id={ props.name } placeholder={ props.placeholder }
        defaultValue={ props.value }
        multiple={ props.multiple } size={ props.rows } { ...controlCommonProps(props) }>
        { props.children }
      </select>
    </span>
    <Help color={ props.helpColor } text={ props.help } />
  </Control >
)
