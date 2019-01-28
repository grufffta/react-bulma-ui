import { ReactNode, ReactChildren } from 'react'
import classnames from 'classnames'
import { isArray } from 'util'

export function wrap(e: React.ReactNode, wrapfunc: (element: React.ReactNode) => JSX.Element) {
  var children = e as React.ReactNode[]
  if (children) {
    return children.map(i => wrapfunc(i))
  }
  return wrapfunc(e)
}

export function addClass(node: ReactNode | ReactChildren, className: string): JSX.Element | JSX.Element[] {
  var element = node as JSX.Element
  if (element === undefined) {
    return element
  }
  if (isArray(element)) {
    return Array.from(element, i => addClass(i, className)) as JSX.Element[]
  }
  return addClassToElement(element, className)
}

export function addClassToElement(element: JSX.Element, className: string) {
  if (element && element.props) {
    if (element.props['className'] && element.props.className) {
      className = classnames(className, element.props.className)
    }
    if (element.props['active'] && element.props.active) {
      className = classnames({ 'is-active': element.props.active }, className)
    }
    if (element.props['expanded'] && element.props.expanded) {
      className = classnames({ 'is-expanded': element.props.active }, className)
    }
  }
  return {
    ...element,
    props: {
      ...element.props,
      className: className
    }
  }
}