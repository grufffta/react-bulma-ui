import './button.scss';
import React from 'react';
import classnames from 'classnames';
import { getPositionStyle } from '../../../props';
/** list of buttons */
export var ButtonList = function (props) { return React.createElement("div", { className: getStyle(props) }, props.children); };
var getStyle = function (props) { return classnames('buttons', { 'navbar-item': props.navbar }, { 'has-addons': props.attached }, { 'tile is-child': props.tile }, getPositionStyle(props.position), getSizeStyle(props.size)); };
function getSizeStyle(size) {
    var _a;
    return _a = {}, _a["are-" + size] = size !== undefined && size !== 'default', _a;
}
