import './form.scss'
import React, { FunctionComponent, ChangeEvent } from 'react'
import { Control } from './';

interface CheckboxOwnProps {
  name?: string
  disabled?: boolean
  checked?: boolean
  onChange?: (e: ChangeEvent) => void;
}

export const Checkbox: FunctionComponent<CheckboxOwnProps> = (props) => (
  <Control { ...props }>
    <label className='checkbox' { ...props.disabled }>
      <input id={ props.name } type='checkbox' disabled={ props.disabled }
        defaultChecked={ props.checked } onChange={ props.onChange } />
      &nbsp;{ props.children }
    </label>
  </Control>)