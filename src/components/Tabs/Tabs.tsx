import './tabs.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Size, Position, getPositionStyle, getSizeStyle } from '../../props'

interface TabsOwnProps {
  position?: Position
  size?: Size
  boxed?: boolean
  toggled?: boolean
  rounded?: boolean
  fullwidth?: boolean
}

export const Tabs: FunctionComponent<TabsOwnProps> = (props) => (
  <div className={classnames('tabs',
    getPositionStyle(props.position),
    getSizeStyle(props.size),
    { 'is-boxed': props.boxed },
    { 'is-toggle': props.toggled },
    { 'is-toggle-rounded': props.rounded },
    { 'is-fullwidth': props.fullwidth })}>
    <ul>
      {props.children}
    </ul>
  </div>)