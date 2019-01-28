import React, { FunctionComponent } from 'react'

export const CardContent: FunctionComponent = (props) => (
  <main className='card-content'>
    {props.children}
  </main>
)