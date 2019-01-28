import React, { FunctionComponent } from 'react'

interface ModalCardHeaderOwnProps {
  title?: string
  onClose?: () => void
}
export const ModalCardHeader: FunctionComponent<ModalCardHeaderOwnProps> = (props) => {

  return <header className='modal-card-head'>
    <p className='modal-card-title'>{ props.title || props.children }</p>
    { props.onClose && <button className='delete' aria-label='close' onClick={ props.onClose }></button> }
  </header>
}