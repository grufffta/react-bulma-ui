import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface HeaderOwnProps {
  title?: string
  icon?: Element
  centered?: boolean
}

export const CardHeader: FunctionComponent<HeaderOwnProps> = ({ title, centered, icon }) => (
  <header className='card-header'>
    {title && <p className={getTitleStyle(title, centered)}>{title}</p>}
    {icon && <div className='card-header-icon'>{icon}</div>}
  </header>
)

const getTitleStyle = (title: string, centered?: boolean) => classnames('card-header-title', { 'is-centered': centered })