import './tag.scss'
import React, { FunctionComponent } from 'react'

import classnames from 'classnames'

interface TagListOwnPropos {
  attached?: boolean
}

export const TagList: FunctionComponent<TagListOwnPropos> = ({ attached, children }) => (
  <div className={classnames('tags', { 'has-addons': attached })}>
    {children}
  </div>)