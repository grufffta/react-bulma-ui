import React, { FunctionComponent } from 'react'

export const ModalContent: FunctionComponent = ({ children }) => (
  <div className='modal-content'>
    { children }
  </div>
)