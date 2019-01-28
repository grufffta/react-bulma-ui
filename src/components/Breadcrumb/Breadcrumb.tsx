import './breadcrumb.scss'
import React, { FunctionComponent } from 'react'
import { Position, Size, getPositionStyle, getSizeStyle } from '../../props'
import classnames from 'classnames'

interface BreadcrumbOwnProps {
  position?: Position
  seperator?: 'arrow' | 'bullet' | 'dot' | 'succeeds'
  size?: Size
}

export const Breadcrumb: FunctionComponent<BreadcrumbOwnProps> = (props) => {
  return (
    <nav className={getStyle(props)} aria-label='breadcrumbs'>
      <ul>
        {props.children}
      </ul>
    </nav>
  )
}

function getStyle(props: BreadcrumbOwnProps) {
  return classnames(
    'breadcrumb',
    getPositionStyle(props.position),
    getSizeStyle(props.size),
    { [`has-${props.seperator}-separator`]: props.seperator !== undefined },
  )
}