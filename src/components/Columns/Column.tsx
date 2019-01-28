import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { ColumnSize } from '../../props'

type GridColumnSize = 'three-quarters' | 'one-quarter' | 'one-third' | 'two-thirds' | 'half' | 'full' | 'four-fiths' | 'three-fiths' | 'two-fifths' | 'one-fifth' | ColumnSize
type TextAlignment = Position | 'justified'

interface ColumnOwnProps {
  alignment?: TextAlignment
  size?: GridColumnSize
  offset?: GridColumnSize
  narrow?: boolean

  mobileSize?: GridColumnSize
  mobileOffset?: GridColumnSize
  mobileNarrow?: boolean

  tabletSize?: GridColumnSize
  tabletOffset?: GridColumnSize
  tabletNarrow?: boolean

  desktopSize?: GridColumnSize
  desktopOffset?: GridColumnSize
  desktopNarrow?: boolean

  widescreenSize?: GridColumnSize
  widescreenOffset?: GridColumnSize
  widescreenNarrow?: boolean

  fullhdSize?: GridColumnSize
  fullhdOffset?: GridColumnSize
  fullhdNarrow?: boolean
}

export const Column: FunctionComponent<ColumnOwnProps> = (props) => (
  <div className={ classnames('column', getTextAlignment(props.alignment),
    { 'is-narrow': props.narrow },
    { 'is-narrow-mobile': props.mobileNarrow },
    { 'is-narrow-tablet': props.tabletNarrow },
    { 'is-narrow-desktop': props.desktopNarrow },
    { 'is-narrow-widescreen': props.widescreenNarrow },
    { 'is-narrow-fullhd': props.fullhdNarrow },
    { [`is-${props.size}`]: props.size !== undefined },
    { [`is-offset-${props.offset}`]: props.offset !== undefined },
    { [`is-${props.mobileSize}-mobile`]: props.mobileSize !== undefined },
    { [`is-offset-${props.mobileOffset}-mobile`]: props.mobileOffset !== undefined },
    { [`is-${props.tabletSize}-tablet`]: props.tabletSize !== undefined },
    { [`is-offset-${props.tabletOffset}-tablet`]: props.tabletOffset !== undefined },
    { [`is-${props.desktopSize}-desktop`]: props.desktopSize !== undefined },
    { [`is-offset-${props.desktopOffset}-desktop`]: props.desktopOffset !== undefined },
    { [`is-${props.widescreenSize}-widescreen`]: props.widescreenSize !== undefined },
    { [`is-offset-${props.widescreenOffset}-widescreen`]: props.widescreenOffset !== undefined },
    { [`is-${props.fullhdSize}-fullhd`]: props.fullhdSize !== undefined },
    { [`is-offset-${props.fullhdOffset}-fullhd`]: props.fullhdOffset !== undefined }) }>
    { props.children }
  </div >)

function getTextAlignment(position?: TextAlignment) {
  return { [`has-text-${position}`]: position !== undefined }
}