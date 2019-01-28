import './section.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface SectionOwnProps {
  spacing?: 'medium' | 'large'
}

export const Section: FunctionComponent<SectionOwnProps> = ({ spacing, children }) => (
  <section className={classnames('section', { [`is-${spacing}`]: spacing !== undefined })}>
    {children}
  </section>
)