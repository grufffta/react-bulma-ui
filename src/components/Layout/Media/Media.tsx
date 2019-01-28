import './media.scss'
import React, { FunctionComponent } from 'react'
import { Delete, Image } from '../../Elements'
import classnames from 'classnames'

interface MediaOwnProps {
  src?: string
  alt?: string
  dimensions?: '48x48' | '64x64'
  tile?: boolean
  rounded?: boolean
  onDelete: () => void
}

export const Media: FunctionComponent<MediaOwnProps> = (props) => (
  <article className={ classnames('media', { 'tile is-child': props.tile }) }>
    { props.src && <Image media dimensions={ props.dimensions || '64x64' } src={ props.src } { ...props } /> }
    <main className='media-content'>
      { props.children }
    </main>
    { props.onDelete && renderDeleteButton(props.onDelete) }
  </article>
)

const renderDeleteButton = (handler: () => void) => (
  <div className='media-right'>
    <Delete onClick={ handler } />
  </div>
)