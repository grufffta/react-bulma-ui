import './form.scss'
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Color, getColorStyle } from '../../props';

interface HelpOwnProps {
  text?: string
  color?: Color
}

export const Help: FunctionComponent<HelpOwnProps> = (props) => props.text
  ? <p className={ classnames('help', getColorStyle(props.color)) }>{ props.text }</p>
  : <></>
