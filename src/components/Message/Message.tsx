import './message.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Size, getColorStyle, getSizeStyle, StandardColor } from '../../props'
import { Delete } from '../Elements'

interface MessageOwnProps {
  header?: string
  color?: StandardColor
  size?: Size
  tile?: boolean
  onClose?: () => void
}

export const Message: FunctionComponent<MessageOwnProps> = (props) => (
  <article className={ classnames('message',
    { 'tile is-child': props.tile },
    getColorStyle(props.color),
    getSizeStyle(props.size)) }>
    { props.header && <header className='message-header'>
      <p>{ props.header }</p>
      { props.onClose && <Delete onClick={ props.onClose } /> }
    </header> }
    <main className='message-body'>
      { props.children }
    </main>
  </article>
)