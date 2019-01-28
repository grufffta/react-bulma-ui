import './modal.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface ModalOwnProps {
  visible?: boolean
  onClose: () => void
}

export const Modal: FunctionComponent<ModalOwnProps> = (props) => (
  <div className={ classnames('modal', { 'is-active': props.visible }) }>
    <div className='modal-background' onClick={ props.onClose }></div>
    { props.children }
    { props.onClose && <button className='modal-close is-large' aria-label='close' onClick={ props.onClose }></button> }
  </div >
)