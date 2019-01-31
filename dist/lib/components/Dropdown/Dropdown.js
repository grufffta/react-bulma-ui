import './dropdown.scss';
import React from 'react';
import { Button, Icon } from '../Elements';
import classnames from 'classnames';
import { NavbarLink } from '../Navbar';
export var Dropdown = function (props) { return (React.createElement("div", { className: classnames(props.navbar ? 'has-dropdown' : 'dropdown', { 'is-active': props.active }, { 'is-hoverable': props.hoverable }, { 'is-right': props.right }, { 'is-up': !props.navbar && props.dropup }, { 'has-dropup': props.navbar && props.dropup }, { 'navbar-item': props.navbar }) },
    props.navbar && React.createElement(NavbarLink, { arrowless: props.arrowless }, props.text),
    !props.navbar && React.createElement("div", { className: 'dropdown-trigger' },
        React.createElement(Button, null,
            React.createElement("span", null, props.text),
            !props.arrowless && React.createElement(Icon, { size: "small", name: 'angle-down', style: 'solid' }))),
    React.createElement("div", { className: classnames(props.navbar ? 'navbar-dropdown' : 'dropdown-menu', { 'is-right': props.navbar && props.right }), role: 'menu' }, props.navbar && props.children ||
        React.createElement("div", { className: 'dropdown-content' }, props.children)))); };
