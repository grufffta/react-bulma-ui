import './form.scss'
import React, { FunctionComponent, ChangeEvent } from 'react'

export interface RadioItemOwnProps {
  name: string
  disabled?: boolean
  bind?: 'on-input' | boolean
  checked?: boolean
  value?: string
  onChange?: (e: ChangeEvent) => void
}

export const RadioItem: FunctionComponent<RadioItemOwnProps> = (props) => (
  <label className='radio' { ...props.disabled }>
    <input type='radio' name={ props.name } disabled={ props.disabled }
      defaultChecked={ props.checked } onChange={ props.onChange } />
    { props.value || props.children }
  </label>
)
