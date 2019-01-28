import React, { FunctionComponent } from 'react'
import { LinkOwnProps } from '../../props'
import classnames from 'classnames'

export interface DropdownLinkOwnProps extends LinkOwnProps {
  navbar?: boolean
}

export const DropdownLink: FunctionComponent<DropdownLinkOwnProps> = ({ navbar, active, ...props }) => (
  <a className={classnames(navbar ? 'navbar-item' : 'dropdown-item', { 'is-active': active })} {...props}>{props.children}</a>
)