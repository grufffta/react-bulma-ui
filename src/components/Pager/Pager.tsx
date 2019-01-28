import './pager.scss'
import React, { Component } from 'react'
import classnames from 'classnames'
import { PagerLink } from './'
import { Size, Position, getPositionStyle, getSizeStyle } from '../../props'

interface PagerOwnProps {
  showIncrementalButtons?: boolean
  textPrevious?: string
  textNext?: string
  pages: number
  width?: number
  position?: Position
  size?: Size
  rounded?: boolean
}

interface PagerOwnState {
  current: number
}

export class Pager extends Component<PagerOwnProps, PagerOwnState> {
  state = { current: 1 }

  render() {
    let pages = this.props.pages
    let width = this.props.width || 3
    let links = Array.from(Array(pages), (v, i) => v = this.renderPageLink(i + 1))
    let { start, end } = this.getIndexFor(this.state.current, width, pages)
    return (
      <nav className={this.getPagerStyle(this.props)} role="navigation" aria-label="navigation">
        {this.props.showIncrementalButtons && this.renderIncrementalLink('previous')}
        {this.props.showIncrementalButtons && this.renderIncrementalLink('next')}
        <ul className="pagination-list">
          {links[0]}
          {pages > width + 2 && this.state.current > width && this.renderElipsis()}
          {links.slice(start, end)}
          {pages > width + 2 && this.state.current < pages - 1 && this.renderElipsis()}
          {pages > 1 && links[this.props.pages - 1]}
        </ul>
      </nav>
    )
  }

  private getIndexFor(page: number, width: number, max: number) {
    let midpoint = Math.floor(width / 2)
    let start = width >= max || page < midpoint + width ? 2 : page - midpoint
    let end = width >= max ? max : start + width
    if (end > max) {
      start = start - (end - max)
      end = max
      if (start < 2)
        start = 2
    }
    return { start: start - 1, end: end - 1 }
  }
  private getPagerStyle = ({ rounded, position, size }: PagerOwnProps) => classnames(
    'pagination',
    { 'is-rounded': rounded },
    getPositionStyle(position),
    getSizeStyle(size))


  private incrementPage = () => this.state.current < this.props.pages ? this.setPage(this.state.current + 1) : null
  private decrementPage = () => this.state.current > 1 ? this.setPage(this.state.current - 1) : null

  private setPage = (page: number) => this.setState({ current: page })

  private renderElipsis = () => <span className="pagination-ellipsis">&hellip;</span>

  private renderPageLink = (page: number) => <PagerLink key={page} page={page} current={this.state.current} onClick={this.setPage} />

  private renderIncrementalLink = (direction: 'previous' | 'next') => {
    let text = direction === 'next' ? this.props.textNext || 'Next' : this.props.textPrevious || 'Previous'
    let disabled = { disabled: direction === 'next' ? this.props.pages === this.state.current : this.state.current === 1 }
    let action = direction === 'next' ? () => this.incrementPage() : () => this.decrementPage()
    return <a {...disabled} className={`pagination-${direction}`} onClick={action}>{text}</a>
  }
}