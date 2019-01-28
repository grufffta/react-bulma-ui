import './icon.scss'
import React, { FunctionComponent } from 'react'
import { ElementColor, Size, getTextColorStyle, getSizeStyle } from '../../../props'
import classnames from 'classnames'

export interface IconContainerOwnProps {
  position?: 'left' | 'right'
  color?: ElementColor
  size?: Size
  panel?: boolean
}

export const IconContainer: FunctionComponent<IconContainerOwnProps> = (props) => (
  <span className={ classnames(props.panel ? 'panel-icon' : 'icon',
    { [`is-${props.position}`]: props.position !== undefined },
    getTextColorStyle(props.color),
    getSizeStyle(props.size)) }>
    { props.children }
  </span>
)