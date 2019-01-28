import './form.scss'
import React, { FunctionComponent } from 'react'
import { ControlOwnProps, Control, Help } from './'
import { getInputControlStyle, controlCommonProps } from '../../props'

export interface NumericOwnProps extends ControlOwnProps {
  type: 'number' | 'range'
  horizontal?: boolean
  max?: number
  min?: number
  step?: number
  pattern?: string
  title?: string
}

export const Numeric: FunctionComponent<NumericOwnProps> = (props) => (
  <Control { ...props }>
    <input id={ props.name } type={ props.type } placeholder={ props.placeholder }
      className={ getInputControlStyle(props) }
      pattern={ props.pattern } title={ props.title }
      max={ props.max } min={ props.min } step={ props.step }
      value={ props.value } { ...controlCommonProps(props) } />
    <Help color={ props.helpColor } text={ props.help } />
  </Control>)