import React, { FunctionComponent } from 'react'

export const DropdownContent: FunctionComponent = (props) => (
  <div className='dropdown-item'>
    {props.children}
  </div>
)