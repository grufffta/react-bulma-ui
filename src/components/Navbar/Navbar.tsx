import './navbar.scss'
import React, { Component } from 'react'
import classnames from 'classnames'
import { StandardColor, getColorStyle } from '../../props'
import { NavbarSection, NavbarBurger } from './'

type NavbarFixedPostion = 'top' | 'bottom'

interface NavbarOwnProps {
  brand?: string | React.ReactNodeArray
  fixed?: NavbarFixedPostion
  shadow?: boolean,
  color?: StandardColor
  transparent?: boolean
  boxed?: boolean
}

interface NavbarOwnState {
  visible: boolean
}

export class Navbar extends Component<NavbarOwnProps, NavbarOwnState> {
  state = { visible: false }

  render() {
    this.setBodyAttributes()
    return (
      <nav role='navigation' {...this.props} className={classnames('navbar',
        { 'has-shadow': this.props.shadow },
        { 'is-fixed-top': this.props.fixed === 'top' },
        { 'is-fixed-bottom': this.props.fixed === 'bottom' },
        { 'is-boxed': this.props.boxed },
        { 'is-transparent': this.props.transparent },
        getColorStyle(this.props.color))}>
        <NavbarSection position='brand' items={this.props.brand}>
          {<NavbarBurger visible={this.state.visible} onClick={this.toggleMenu} />}
        </NavbarSection>
        <div className={classnames('navbar-menu', { 'is-active': this.state.visible })}>
          {this.props.children}
        </div>
      </nav>
    )
  }

  private toggleMenu = () => {
    this.setState({ visible: !this.state.visible })
  }

  private setBodyAttributes() {
    document.body.classList.remove('has-navbar-fixed-top', 'has-navbar-fixed-bottom')
    if (this.props.fixed === 'top') {
      document.body.classList.add('has-navbar-fixed-top')
    }
    else if (this.props.fixed === 'bottom') {
      document.body.classList.add('has-navbar-fixed-bottom')
    }
  }
}
