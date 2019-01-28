import './table.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { CellElement } from './Cell'

interface TableOwnProps {
  bordered?: boolean
  striped?: boolean
  narrow?: boolean
  hoverable?: boolean
  fullwidth?: boolean
  tile?: boolean
  header?: Array<CellElement>
  footer?: Array<CellElement>
}

export const Table: FunctionComponent<TableOwnProps> = (props) => (
  <table className={ classnames('table',
    { 'is-bordered': props.bordered },
    { 'is-striped': props.striped },
    { 'is-narrow': props.narrow },
    { 'is-hoverable': props.hoverable },
    { 'is-fullwidth': props.fullwidth },
    { 'tile is-child': props.tile }) }>
    { props.header && <thead>{ props.header }</thead> }
    <tbody>
      { props.children }
    </tbody>
    { props.footer && <tfoot>{ props.footer }</tfoot> }
  </table>
)