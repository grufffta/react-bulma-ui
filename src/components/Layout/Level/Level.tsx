import './level.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface LevelOwnProps {
  mobile?: boolean

}
export const Level: FunctionComponent<LevelOwnProps> = ({ mobile, children }) => (
  <nav className={ classnames('level', { 'is-mobile': mobile }) }>
    { children }
  </nav>
)