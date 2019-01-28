import React, { FunctionComponent, ReactNode } from 'react'
import { addClass } from '../../util/wrapper'

export const CardFooter: FunctionComponent = (props) => (
  <footer className="card-footer">
    {addClass(props.children, 'card-footer-item')}
  </footer>
)
