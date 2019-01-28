import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface PagerLinkOwnProps {
  page: number
  current?: number
  onClick: (page: number) => void
}

export const PagerLink: FunctionComponent<PagerLinkOwnProps> = props => (
  <li key={`page-${props.page}`}>
    <a aria-label={`Goto page ${props.page}`} className={classnames('pagination-link',
      { 'is-current': props.page === props.current })} onClick={e => props.onClick(props.page)}>
      {props.page}
    </a>
  </li>)