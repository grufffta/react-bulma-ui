import * as tslib_1 from "tslib";
import './form.scss';
import React from 'react';
import classnames from 'classnames';
import { Control, Help } from './';
import { getInputControlStyle, controlCommonProps } from '../../props';
export var Input = function (props) { return (React.createElement(Control, tslib_1.__assign({}, props),
    React.createElement("input", tslib_1.__assign({ id: props.name, type: props.type, placeholder: props.placeholder, className: classnames(getInputControlStyle(props), { 'button': props.type === 'button' }), pattern: props.pattern, title: props.title, defaultValue: props.value }, controlCommonProps(props))),
    React.createElement(Help, { color: props.helpColor, text: props.help }))); };
