import React, { FunctionComponent } from 'react'

export const MenuList: FunctionComponent = (props) => (
  <ul className='menu-list'>
    {props.children}
  </ul>
)