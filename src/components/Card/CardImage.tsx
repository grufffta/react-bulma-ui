import React, { FunctionComponent } from 'react'
import { Image, ImageOwnProps } from '../Elements'

export const CardImage = (props: ImageOwnProps) => (
  <div className='card-image'>
    <Image {...props} dimensions='4by3' />
  </div>
)
