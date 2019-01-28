import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface NavbarBurgerOwnProps {
  visible?: boolean
  onClick: () => void
}

export const NavbarBurger: FunctionComponent<NavbarBurgerOwnProps> = props => (
  <a role="button" onClick={() => props.onClick()}
    className={classnames('navbar-burger burger', { 'is-active': props.visible })}
    aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)