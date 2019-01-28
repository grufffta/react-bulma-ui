import './dropdown.scss'
import React, { FunctionComponent } from 'react'
import { Button, Icon } from '../Elements'
import classnames from 'classnames'
import { NavbarLink } from '../Navbar'

interface DropdownOwnProps {
  text: string
  hoverable?: boolean
  active?: boolean
  right?: boolean
  dropup?: boolean
  navbar?: boolean
  arrowless?: boolean
}

export const Dropdown: FunctionComponent<DropdownOwnProps> = (props) => (
  <div className={classnames(props.navbar ? 'has-dropdown' : 'dropdown',
    { 'is-active': props.active },
    { 'is-hoverable': props.hoverable },
    { 'is-right': props.right },
    { 'is-up': !props.navbar && props.dropup },
    { 'has-dropup': props.navbar && props.dropup },
    { 'navbar-item': props.navbar },
  )}>
    {props.navbar && <NavbarLink arrowless={props.arrowless}>{props.text}</NavbarLink>}
    {!props.navbar && <div className='dropdown-trigger'>
      <Button>
        <span>{props.text}</span>
        {!props.arrowless && <Icon size="small" name='angle-down' style='solid' />}
      </Button>
    </div>}
    <div className={classnames(props.navbar ? 'navbar-dropdown' : 'dropdown-menu', { 'is-right': props.navbar && props.right })} role='menu'>
      {props.navbar && props.children ||
        <div className='dropdown-content'>
          {props.children}
        </div>}
    </div>
  </div >
)