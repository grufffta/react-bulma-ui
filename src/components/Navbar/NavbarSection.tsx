import './navbar.scss'
import React, { FunctionComponent, ReactNode } from 'react'
import classnames from 'classnames'
import { addClass } from '../../util/wrapper'

interface NavbarSectionProps {
  position: 'brand' | 'start' | 'end'
  tabs?: boolean
  items?: string | React.ReactNodeArray
}

export const NavbarSection: FunctionComponent<NavbarSectionProps> = ({ position, tabs, ...props }) => {
  let items = props.items || props.children
  return <div className={`navbar-${position}`}>
    {renderItem(items, classnames('navbar-item', { 'is-tab': tabs }))}
    {props.items && props.children}
  </div>
}

export const renderItem = (children: ReactNode, classNames: string): any => {

  if (typeof children === 'string')
    return <a className={classNames}>{children}</a>

  var element = children as JSX.Element
  var type = element['type'] && element['type'].toString()

  if (type === 'Symbol(react.fragment)' && element.props['children']) {
    return Array.from(element.props.children, i => renderItem(i, classNames))
  }

  return addClass(element, classNames)
}