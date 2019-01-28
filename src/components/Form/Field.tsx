import './form.scss'
import React, { FunctionComponent } from 'react';
import classnames from 'classnames'
import { Color, Size } from '../../props';
import { Help } from './';


interface FieldOwnProps {
  label?: string
  help?: string
  helpColor?: Color
  attached?: boolean | 'right' | 'centered'
  grouped?: boolean | 'right' | 'centered' | 'multiline'
  horizontal?: boolean | 'input' | 'button' | Size
  nav?: boolean
}

export const Field: FunctionComponent<FieldOwnProps> = (props) => {
  let label = props.label && <label className='label'>{ props.label }</label>
  let field = <div className={ classnames('field',
    { 'navbar-item': props.nav },
    { 'is-grouped': props.grouped },
    { 'is-grouped-centered': props.grouped === 'centered' },
    { 'is-grouped-right': props.grouped === 'right' },
    { 'is-grouped-multiline': props.grouped === 'multiline' },
    { 'has-addons': props.attached },
    { 'has-addons-centered': props.attached === 'centered' },
    { 'has-addons-right': props.attached === 'right' }) }>
    { !props.horizontal && label }
    { props.children }
    { !props.attached && <Help color={ props.helpColor } text={ props.help } /> }
  </div>
  if (props.horizontal) {
    return <div className={ classnames('field', { 'is-horizontal': props.horizontal }) }>
      <div className={ classnames('field-label',
        { 'is-small': props.horizontal == 'small' },
        { 'is-medium': props.horizontal == 'medium' },
        { 'is-large': props.horizontal == 'large' },
        { 'is-normal': props.horizontal === 'input' || props.horizontal === 'button' }) }>{ label }</div>
      <div className='field-body'>
        { field }
      </div>
    </div>
  }
  return field;
}