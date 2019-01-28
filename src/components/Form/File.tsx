import './form.scss'
import React, { FunctionComponent, ChangeEvent } from 'react'
import classnames from 'classnames'
import { Color, Size, getColorStyle, getSizeStyle } from '../../props';
import { IconElement } from '../Elements';

interface FileOwnProps {
  name?: string
  showFilename?: boolean
  expanded?: boolean
  filename?: string
  label?: string
  icon?: IconElement
  right?: boolean
  boxed?: boolean
  color?: Color
  size?: Size
  alignment?: 'centered' | 'right',
  onChange?: (event: ChangeEvent) => void
}

export const File: FunctionComponent<FileOwnProps> = (props) => (
  <div className={ classnames('file', getColorStyle(props.color), getSizeStyle(props.size),
    { [`is-${props.alignment}`]: props.alignment !== undefined },
    { 'has-name': props.showFilename },
    { 'is-right': props.right },
    { 'is-boxed': props.boxed }) }>
    <label className='file-label'>
      <input id={ props.name } className="file-input" type="file" name={ props.name } onChange={ props.onChange } />
      <span className="file-cta">
        { props.icon && <span className='file-icon'>{ props.icon }</span> }
        { props.label && <span className='file-label'>{ props.label }</span> }
      </span>
      { props.showFilename && <span className={ classnames('file-name', { 'is-fullwidth': props.expanded }) }>{ props.filename }</span> }
    </label>
  </div>)