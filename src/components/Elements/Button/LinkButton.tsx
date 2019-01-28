import './button.scss'
import React, { FunctionComponent } from 'react'
import { ButtonCommonProps, getCommonStyle } from './ButtonCommon'
import classnames from 'classnames'

interface LinkButtonOwnProps extends ButtonCommonProps {
  /** display loading indicator */
  loading?: boolean
}

/** button using html anchor element */
export const LinkButton: FunctionComponent<LinkButtonOwnProps> = (props) => <a className={getStyle(props)} {...props}>
  {props.children}
</a>

function getStyle(props: LinkButtonOwnProps) {
  return classnames(getCommonStyle(props),
    { 'is-loading': props.loading })
}