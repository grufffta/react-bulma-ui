import './form.scss'
import React, { FunctionComponent } from 'react'
import { addClass } from '../../util/wrapper';

export const Radio: FunctionComponent = ({ children }) => (
  <div className='control'>
    { children }
  </div>
)

