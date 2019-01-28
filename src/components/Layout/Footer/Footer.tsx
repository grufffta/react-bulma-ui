import './footer.scss'
import React, { FunctionComponent } from 'react'
import { StandardColor } from '../../../props'
import { Content } from '../../Elements'
import classnames from 'classnames'

interface FooterOwnProps {
  centered?: boolean
  color?: StandardColor
  background?: StandardColor
  tile?: boolean
}

export const Footer: FunctionComponent<FooterOwnProps> = ({ children, ...props }) => (
  <footer className={ classnames('footer', { 'tile is-child': props.tile }) }>
    <Content { ...props }>
      { children }
    </Content>
  </footer>)