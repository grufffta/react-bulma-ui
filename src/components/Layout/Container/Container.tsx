import './container.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface ContainerOwnProps {
  fluid?: boolean
  breakpoint?: 'widescreen' | 'fullhd'
  tile?: boolean
}
export const Container: FunctionComponent<ContainerOwnProps> = (props) => (
  <div className={ classnames('container',
    { 'is-fluid': props.fluid },
    { [`is-${props.breakpoint}`]: props.breakpoint !== undefined },
    { 'tile is-child': props.tile }) }>
    { props.children }
  </div>)