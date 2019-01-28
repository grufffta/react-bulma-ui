import React, { FunctionComponent } from 'react'

export const ModalCardFooter: FunctionComponent = (props) => (
  <footer className='modal-card-foot'>
    { props.children }
  </footer>
)