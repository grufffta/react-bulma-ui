import React, { FunctionComponent } from 'react'
import { InputButtonOwnProps, InputButton } from './InputButton'

/** Form submit input */
export const SubmitButton: FunctionComponent<InputButtonOwnProps> = (props) => <InputButton type='submit' {...props} />