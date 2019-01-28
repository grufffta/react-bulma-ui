import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface LevelSectionOwnProps {
  position: 'left' | 'right' | 'centered'
}

export const LevelSection: FunctionComponent<LevelSectionOwnProps> = (props) => {
  let items = getLevelItems(props.children, props)
  return props.position === 'centered'
    ? <>{ items }</>
    : <div className={ `level-${props.position}` }>{ items }</div>
}

const LevelItem: FunctionComponent<LevelSectionOwnProps> = (props) => (
  <div className={ classnames('level-item',
    { 'has-text-centered': props.position === 'centered' }) }>
    { props.children }
  </div >
)

function getLevelItems(children: React.ReactNode, props: LevelSectionOwnProps) {
  return React.Children.map(children, i => <LevelItem { ...props }>{ i }</LevelItem>)
}