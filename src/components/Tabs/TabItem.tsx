import React, { FunctionComponent } from "react"
import classnames from "classnames"
import { LinkOwnProps } from "../../props"

export const TabItem: FunctionComponent<LinkOwnProps> = ({ active, ...props }) => (
  <li className={classnames({ 'is-active': active })}>
    <a {...props} >
      {props.children}
    </a>
  </li>)