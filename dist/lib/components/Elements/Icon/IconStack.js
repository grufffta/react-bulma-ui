import * as tslib_1 from "tslib";
import './icon.scss';
import React from 'react';
import classnames from 'classnames';
import { IconContainer } from './IconContainer';
export var IconStack = function (props) { return (React.createElement(IconContainer, tslib_1.__assign({}, props),
    React.createElement("span", { className: classnames('fa-stack', { 'fa-lg': props.size === 'large' }) }, props.children))); };
