import React, { FunctionComponent, ReactNode } from 'react'
import { LinkOwnProps } from '../../props'
import classnames from 'classnames'
import { isArray } from 'util'

export const MenuLink: FunctionComponent<LinkOwnProps> = (props) => {
  if (isArray(props.children)) {
    return (
      <li>
        {createLink(props, props.children[0])}
        <ul>
          {props.children.slice(1)}
        </ul>
      </li>
    )
  }
  return <li>{createLink(props, props.children)}</li >
}

const createLink = ({ active, ...props }: LinkOwnProps, content: ReactNode): JSX.Element => (
  <a className={classnames({ 'is-active': active })} {...props}>{content}</a>
)