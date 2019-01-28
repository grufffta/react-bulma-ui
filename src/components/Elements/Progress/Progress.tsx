import './progress.scss'
import React, { FunctionComponent } from 'react'
import { StandardColor, Size, getSizeStyle, getColorStyle } from '../../../props'
import classnames from 'classnames'

interface ProgressOwnProps {
  color?: StandardColor
  size?: Size
  value?: number
  max?: number
}

export const Progress: FunctionComponent<ProgressOwnProps> = (props) => (
  <progress className={classnames('progress',
    getSizeStyle(props.size),
    getColorStyle(props.color))} max={props.max || 100} value={props.value}>
    {props.children}
  </progress>)