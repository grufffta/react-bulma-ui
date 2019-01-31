import './tabs.scss';
import React from 'react';
import classnames from 'classnames';
import { getPositionStyle, getSizeStyle } from '../../props';
export var Tabs = function (props) { return (React.createElement("div", { className: classnames('tabs', getPositionStyle(props.position), getSizeStyle(props.size), { 'is-boxed': props.boxed }, { 'is-toggle': props.toggled }, { 'is-toggle-rounded': props.rounded }, { 'is-fullwidth': props.fullwidth }) },
    React.createElement("ul", null, props.children))); };
