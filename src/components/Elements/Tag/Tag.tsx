import './tag.scss'
import React, { FunctionComponent } from 'react'
import { StandardColor, getColorStyle, getSizeStyle, Size } from '../../../props'
import classnames from 'classnames'

interface TagOwnProps {
  color?: StandardColor
  rounded?: boolean
  size?: Size
  delete?: boolean
  onClick?: () => void
}

export const Tag: FunctionComponent<TagOwnProps> = props => {
  let style = classnames('tag',
    { 'is-delete': props.delete },
    { 'is-rounded': props.rounded },
    getColorStyle(props.color),
    getSizeStyle(props.size))

  if (props.delete)
    return <a className={style} onClick={props.onClick}>{props.children}</a>

  return <span className={style} onClick={props.onClick}>{props.children}</span>
}
