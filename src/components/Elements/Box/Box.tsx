import './box.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface BoxOwnProps {
  tile?: boolean
}
export const Box: FunctionComponent<BoxOwnProps> = ({ tile, children }) => <div className={ classnames('box', { 'tile is-child': tile }) }>{ children }</div>