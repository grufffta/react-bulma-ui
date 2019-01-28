import React, { FunctionComponent } from 'react'
import { InputButtonOwnProps, InputButton } from './InputButton'

/** Form reset input */
export const ResetButton: FunctionComponent<InputButtonOwnProps> = (props) => <InputButton type='reset' {...props} />