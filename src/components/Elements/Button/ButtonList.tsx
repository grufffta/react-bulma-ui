import './button.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Position, getPositionStyle, Size } from '../../../props'

interface ButtonListOwnProps {
  /** attach buttons in list to each other */
  attached?: boolean
  /** button position in container */
  position?: Position
  /** size of all buttons in list */
  size?: Size
  /** this button list is part of a navbar */
  navbar?: boolean
  /** this button list is a child tile */
  tile?: boolean
}

/** list of buttons */
export const ButtonList: FunctionComponent<ButtonListOwnProps> = (props) => <div className={ getStyle(props) }>{ props.children }</div>

const getStyle = (props: ButtonListOwnProps) => classnames('buttons',
  { 'navbar-item': props.navbar },
  { 'has-addons': props.attached },
  { 'tile is-child': props.tile }, getPositionStyle(props.position), getSizeStyle(props.size))

function getSizeStyle(size?: Size) {
  return { [`are-${size}`]: size !== undefined && size !== 'default' }
}