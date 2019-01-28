import './button.scss'
import React, { FunctionComponent } from 'react'
import { ButtonCommonProps, getCommonStyle } from './ButtonCommon'

export interface InputButtonOwnProps extends ButtonCommonProps {
  /** input button value */
  value?: string | number
}

export const InputButton: FunctionComponent<InputButtonOwnProps & { type: string | undefined }> = (props) => <input type={props.type} value={props.value} className={getCommonStyle(props)} disabled={props.disabled} />