import React, { FunctionComponent } from 'react'
import { LinkOwnProps } from '../../props'
import classnames from 'classnames'

export const BreadcrumbLink: FunctionComponent<LinkOwnProps> = ({ active, ...props }) => (
  <li className={classnames({ 'is-active': active })}><a {...props}>{props.children}</a></li>
)