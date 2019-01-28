import React, { FunctionComponent } from 'react'

interface PanelLabelOwnProps {
  text?: string
  checkbox?: boolean
  onCheckboxChanged?: () => void
}

export const PanelLabel: FunctionComponent<PanelLabelOwnProps> = props => (
  <label className="panel-block">
    {props.checkbox && <input type="checkbox" onChange={props.onCheckboxChanged} />}
    {props.text || props.children}
  </label>)