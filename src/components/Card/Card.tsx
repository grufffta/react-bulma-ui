import './card.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface CardOwnProps {
  tile?: boolean
}
export const Card: FunctionComponent<CardOwnProps> = (props) => (
  <div className={ classnames('card', { 'tile is-child': props.tile }) }>
    { props.children }
  </div>
)