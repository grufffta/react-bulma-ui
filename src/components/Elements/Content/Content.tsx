import './content.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Size, ElementColor, getTextColorStyle, getBackgroundColorStyle } from '../../../props'

interface ContentOwnProps {
  tile?: boolean
  size?: Size
  centered?: boolean
  color?: ElementColor
  background?: ElementColor
  orderedListMarker?: 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman'
}

export const Content: FunctionComponent<ContentOwnProps> = (props) => (
  <div className={ classnames('content',
    { [`is-${props.size}`]: props.size !== undefined },
    { [`is-${props.orderedListMarker}`]: props.orderedListMarker !== undefined },
    { 'has-text-centered': props.centered },
    { 'tile is-child': props.tile },
    getTextColorStyle(props.color),
    getBackgroundColorStyle(props.background)) }>
    { props.children }
  </div>
)