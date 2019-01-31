import * as tslib_1 from "tslib";
import './form.scss';
import React from 'react';
import classnames from 'classnames';
import { Control, Help } from './';
import { getSizeStyle, getColorStyle, controlCommonProps } from '../../props';
export var Select = function (props) { return (React.createElement(Control, tslib_1.__assign({}, props, { expanded: props.fullWidth }),
    React.createElement("span", { className: classnames('select', getSizeStyle(props.size), getColorStyle(props.color), { 'is-multiple': props.multiple }, { 'is-fullwidth': props.fullWidth }) },
        React.createElement("select", tslib_1.__assign({ id: props.name, placeholder: props.placeholder, defaultValue: props.value, multiple: props.multiple, size: props.rows }, controlCommonProps(props)), props.children)),
    React.createElement(Help, { color: props.helpColor, text: props.help }))); };
