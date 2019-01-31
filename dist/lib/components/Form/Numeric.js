import * as tslib_1 from "tslib";
import './form.scss';
import React from 'react';
import { Control, Help } from './';
import { getInputControlStyle, controlCommonProps } from '../../props';
export var Numeric = function (props) { return (React.createElement(Control, tslib_1.__assign({}, props),
    React.createElement("input", tslib_1.__assign({ id: props.name, type: props.type, placeholder: props.placeholder, className: getInputControlStyle(props), pattern: props.pattern, title: props.title, max: props.max, min: props.min, step: props.step, value: props.value }, controlCommonProps(props))),
    React.createElement(Help, { color: props.helpColor, text: props.help }))); };
