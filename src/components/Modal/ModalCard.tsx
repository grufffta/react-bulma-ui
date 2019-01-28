import React, { FunctionComponent, Children } from 'react'
import { ModalCardHeader } from './ModalCardHeader'

interface ModalCardOwnProps {
  title?: string
  onClose?: () => void
}
export const ModalCard: FunctionComponent<ModalCardOwnProps> = (props) => {
  let { children, ...header } = props
  return <div className='modal-card'>
    {props.title && <ModalCardHeader {...header} />}
    {children}
  </div>
}