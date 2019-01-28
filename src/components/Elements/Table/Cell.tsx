import React, { FunctionComponent } from 'react'

export type CellElement = CellOwnProps & JSX.Element

export interface CellOwnProps {
  heading?: boolean
  text?: string
  abbreviated?: string
}

export const Cell: FunctionComponent<CellOwnProps> = (props) => {
  let content = props.text || props.children
  return props.heading
    ? <th>{ getContent(props, content) }</th>
    : <td>{ content }</td>
}

function getContent({ text, abbreviated }: CellOwnProps, content: {} | null | undefined): any {
  if (abbreviated) {
    return <abbr title={ text }>{ abbreviated }</abbr>
  }
  return content
}