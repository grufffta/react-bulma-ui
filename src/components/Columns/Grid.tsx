import './grid.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface GridOwnProps {
  visibleon?: 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd';
  gapless?: boolean
  multiline?: boolean
  vcentered?: boolean
  centered?: boolean
}

export const Grid: FunctionComponent<GridOwnProps> = (props) => (
  <div className={ classnames('columns',
    { [`is-${props.visibleon}`]: props.visibleon },
    { 'is-gapless': props.gapless },
    { 'is-centered': props.centered },
    { 'is-vcentered': props.vcentered },
    { 'is-multiline': props.multiline }) }>
    { props.children }
  </div>)