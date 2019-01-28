import './notification.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { getColorStyle, StandardColor } from '../../../props'
import { Delete } from '../Delete'

interface NotificationOwnProps {
  color?: StandardColor
  tile?: boolean
  onClose?: () => void
}

export const Notification: FunctionComponent<NotificationOwnProps> = (props) => (
  <article className={ classnames('notification',
    { 'tile is-child': props.tile },
    getColorStyle(props.color)) }>
    { props.onClose && <Delete onClick={ props.onClose } /> }
    { props.children }
  </article>
)