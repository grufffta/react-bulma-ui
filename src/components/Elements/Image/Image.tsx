import './image.scss'
import classnames from 'classnames'
import React, { FunctionComponent } from 'react'

type ImageSize = '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128'
type ImageRatio = 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3'

export interface ImageOwnProps {
  dimensions?: ImageSize | ImageRatio
  rounded?: boolean
  src: string
  alt?: string
  media?: boolean
  navbar?: boolean
  tile?: boolean
}

export const Image: FunctionComponent<ImageOwnProps> = (props) => {

  if (props.media) {
    return (
      <figure className='media-left'>
        <p className={ classnames('image',
          { [`is-${props.dimensions}`]: props.dimensions !== undefined }) }>
          { renderImage(props) }
        </p>
      </figure>)
  }
  else if (props.navbar) {
    return renderImage(props)
  }
  return (
    <figure className={ classnames('image',
      { [`is-${props.dimensions}`]: props.dimensions !== undefined },
      { 'tile is-child': props.tile }) }>
      { renderImage(props) }
    </figure>)
}

const renderImage = ({ src, rounded, alt }: ImageOwnProps) => <img className={ classnames({ 'is-rounded': rounded }) } src={ src } alt={ alt } />