import * as tslib_1 from "tslib";
import './navbar.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import { getColorStyle } from '../../props';
import { NavbarSection, NavbarBurger } from './';
var Navbar = /** @class */ (function (_super) {
    tslib_1.__extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { visible: false };
        _this.toggleMenu = function () {
            _this.setState({ visible: !_this.state.visible });
        };
        return _this;
    }
    Navbar.prototype.render = function () {
        this.setBodyAttributes();
        return (React.createElement("nav", tslib_1.__assign({ role: 'navigation' }, this.props, { className: classnames('navbar', { 'has-shadow': this.props.shadow }, { 'is-fixed-top': this.props.fixed === 'top' }, { 'is-fixed-bottom': this.props.fixed === 'bottom' }, { 'is-boxed': this.props.boxed }, { 'is-transparent': this.props.transparent }, getColorStyle(this.props.color)) }),
            React.createElement(NavbarSection, { position: 'brand', items: this.props.brand }, React.createElement(NavbarBurger, { visible: this.state.visible, onClick: this.toggleMenu })),
            React.createElement("div", { className: classnames('navbar-menu', { 'is-active': this.state.visible }) }, this.props.children)));
    };
    Navbar.prototype.setBodyAttributes = function () {
        document.body.classList.remove('has-navbar-fixed-top', 'has-navbar-fixed-bottom');
        if (this.props.fixed === 'top') {
            document.body.classList.add('has-navbar-fixed-top');
        }
        else if (this.props.fixed === 'bottom') {
            document.body.classList.add('has-navbar-fixed-bottom');
        }
    };
    return Navbar;
}(Component));
export { Navbar };
