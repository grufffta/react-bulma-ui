import './icon.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { IconContainer, IconContainerOwnProps } from './IconContainer'

export const IconStack: FunctionComponent<IconContainerOwnProps> = (props) => (
  <IconContainer {...props}>
    <span className={classnames('fa-stack', { 'fa-lg': props.size === 'large' })}>
      {props.children}
    </span>
  </IconContainer>
)