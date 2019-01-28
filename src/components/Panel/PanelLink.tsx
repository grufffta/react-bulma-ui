import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { LinkOwnProps } from '../../props'

interface PanelLinkOwnProps extends LinkOwnProps {
  tab?: boolean
}
export const PanelLink: FunctionComponent<PanelLinkOwnProps> = ({ active, tab, ...props }) => (
  <a className={ classnames(tab ? '' : 'panel-block',
    { 'is-active': active }) } { ...props }>
    { props.children }
  </a>)