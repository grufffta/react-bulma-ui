import React, { FunctionComponent } from 'react'
import { LinkOwnProps } from '../../props'
import classnames from 'classnames'

interface NavbarLinkOwnProps extends LinkOwnProps {
  arrowless?: boolean
}

export const NavbarLink: FunctionComponent<NavbarLinkOwnProps> = ({ active, arrowless, children, ...props }) => {
  return <a className={classnames('navbar-link', { 'is-arrowless': arrowless })} {...props}>{children}</a>
}