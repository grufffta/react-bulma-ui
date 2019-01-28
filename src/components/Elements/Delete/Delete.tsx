import './delete.scss'
import React from 'react'
import { Size, getSizeStyle } from '../../../props'
import classnames from 'classnames'

export interface DeleteOwnProps {
  size?: Size
  button?: boolean
  onClick?: () => void
}

export const Delete = (props: DeleteOwnProps) => {
  let style = classnames('delete', getSizeStyle(props.size))
  return props.button === true
    ? <button className={style} onClick={props.onClick}></button>
    : <a className={style} onClick={props.onClick}></a >
}