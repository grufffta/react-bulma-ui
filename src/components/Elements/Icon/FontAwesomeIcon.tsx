import React, { FunctionComponent } from 'react'
import { IconOwnProps } from './Icon'
import classnames from 'classnames'
import { getTextColorStyle } from '../../../props'

export const FontAwesomeIcon: FunctionComponent<IconOwnProps> = (props) => (
  <i className={classnames(
    { 'fas': props.style === 'solid' },
    { 'far': props.style === undefined || props.style === 'regular' },
    { 'fal': props.style === 'light' },
    { 'fab': props.style === 'brands' },
    { 'fa-fw': props.fixedWidth },
    { 'fa-border': props.bordered },
    { 'fa-inverse': props.inversed },
    { [`fa-${props.animation}`]: props.animation !== undefined },
    { 'fa-lg': props.size === undefined && props.iconSize === 'large' },
    { 'fa-lg': props.size === 'medium' && (props.iconSize === undefined || props.iconSize === 'medium') },
    { 'fa-2x': props.size === 'medium' && props.iconSize === 'large' },
    { 'fa-lg': props.size === 'large' && props.iconSize === undefined },
    { 'fa-2x': props.size === 'large' && props.iconSize === 'medium' },
    { 'fa-3x': props.size === 'large' && props.iconSize === 'large' },
    { [`fa-stacked-${props.stacked}`]: props.stacked !== undefined },
    props.stacked && getTextColorStyle(props.color),
    `fa-${props.name}`
  )}></i>
)
