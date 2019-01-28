import './menu.scss'
import React, { FunctionComponent } from 'react'

export const Menu: FunctionComponent = (props) => (
  <aside className='menu'>
    {props.children}
  </aside>
)