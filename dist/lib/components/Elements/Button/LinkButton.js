import * as tslib_1 from "tslib";
import './button.scss';
import React from 'react';
import { getCommonStyle } from './ButtonCommon';
import classnames from 'classnames';
/** button using html anchor element */
export var LinkButton = function (props) { return React.createElement("a", tslib_1.__assign({ className: getStyle(props) }, props), props.children); };
function getStyle(props) {
    return classnames(getCommonStyle(props), { 'is-loading': props.loading });
}
