import './panel.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
interface PanelOwnProps {
  heading?: string | JSX.Element
  tile?: boolean
}
export const Panel: FunctionComponent<PanelOwnProps> = (props) => (
  <nav className={ classnames('panel', { 'tile is-child': props.tile }) }>
    <p className="panel-heading">
      { props.heading }
    </p>
    { props.children }
  </nav>
)