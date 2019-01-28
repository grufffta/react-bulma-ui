import React, { FunctionComponent, Children } from 'react'

interface MenuLabelOwnProps {
  text?: string
}

export const MenuLabel: FunctionComponent<MenuLabelOwnProps> = props => <p className='menu-label'>{props.text || props.children}</p>