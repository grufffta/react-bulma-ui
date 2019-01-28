import './title.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { TextSize, VerticalAlignment } from '../../../props'

interface TitleOwnProps {
  size?: TextSize
  paragraph?: boolean
  subtitle?: boolean
  heading?: boolean
  spaced?: boolean
  valign?: VerticalAlignment
}

export const Title: FunctionComponent<TitleOwnProps> = props => {
  let classes = classnames(
    { 'title': props.subtitle === undefined && props.heading === undefined },
    { 'subtitle': props.subtitle },
    { 'heading': props.heading },
    { [`is-${props.size}`]: props.size !== undefined },
    { 'is-spaced': props.spaced === true })
  let size = props.paragraph === undefined ? props.size : undefined
  let style = getVerticalAlignStyle(props.valign)
  return create(classes, style, size, props.children)
}

function create(classes: string, style: any, size?: TextSize, children?: any) {
  switch (size) {
    case 1: return <h1 className={ classes } style={ style }>{ children }</h1>
    case 2: return <h2 className={ classes } style={ style }>{ children }</h2>
    case 3: return <h3 className={ classes } style={ style }>{ children }</h3>
    case 4: return <h4 className={ classes } style={ style }>{ children }</h4>
    case 5: return <h5 className={ classes } style={ style }>{ children }</h5>
    case 6: return <h6 className={ classes } style={ style }>{ children }</h6>
    default:
      return <p className={ classes } style={ style }>{ children }</p>
  }
}

function getVerticalAlignStyle(valign?: VerticalAlignment) {
  if (valign !== undefined)
    return { 'display': 'flex', 'align-items': valign }
  return {}
}