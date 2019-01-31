import * as tslib_1 from "tslib";
import './form.scss';
import React from 'react';
import classnames from 'classnames';
import { Control } from './';
import { getControlStyle, controlCommonProps } from '../../props';
export var TextArea = function (props) { return (React.createElement(Control, tslib_1.__assign({}, props),
    React.createElement("textarea", tslib_1.__assign({ id: props.name, placeholder: props.placeholder, className: classnames('textarea', getControlStyle(props), { 'has-fixed-size': props.fixedSize }), rows: props.rows, defaultValue: props.text }, controlCommonProps(props))))); };
