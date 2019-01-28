import './button.scss'
import React, { FunctionComponent } from 'react'
import { ButtonCommonProps, getCommonStyle } from './ButtonCommon'
import classnames from 'classnames'

interface ButtonOwnProps extends ButtonCommonProps {
  /** display loading indicator */
  loading?: boolean
  tile?: boolean
}

/** button using html form button element */
export const Button: FunctionComponent<ButtonOwnProps> = (props) => {
  let { onClick, disabled } = props
  let htmlattr = { onClick, disabled }
  return <button type='button' className={ getStyle(props) } { ...htmlattr }>
    { props.children }
  </button>
}

function getStyle(props: ButtonOwnProps) {
  return classnames(getCommonStyle(props),
    { 'is-loading': props.loading },
    { 'tile is-child': props.tile })
}