import * as tslib_1 from "tslib";
import './button.scss';
import React from 'react';
import { getCommonStyle } from './ButtonCommon';
import classnames from 'classnames';
/** button using html form button element */
export var Button = function (props) {
    var onClick = props.onClick, disabled = props.disabled;
    var htmlattr = { onClick: onClick, disabled: disabled };
    return React.createElement("button", tslib_1.__assign({ type: 'button', className: getStyle(props) }, htmlattr), props.children);
};
function getStyle(props) {
    return classnames(getCommonStyle(props), { 'is-loading': props.loading }, { 'tile is-child': props.tile });
}
