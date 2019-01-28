import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface RowOwnProps {
  selected?: boolean
  onClick?: () => void
}

export const Row: FunctionComponent<RowOwnProps> = (props) => (
  <tr className={ classnames({ 'is-selected': props.selected }) } onClick={ props.onClick }>
    { props.children }
  </tr>
)
