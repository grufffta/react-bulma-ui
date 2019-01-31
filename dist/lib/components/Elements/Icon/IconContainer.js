import './icon.scss';
import React from 'react';
import { getTextColorStyle, getSizeStyle } from '../../../props';
import classnames from 'classnames';
export var IconContainer = function (props) {
    var _a;
    return (React.createElement("span", { className: classnames(props.panel ? 'panel-icon' : 'icon', (_a = {}, _a["is-" + props.position] = props.position !== undefined, _a), getTextColorStyle(props.color), getSizeStyle(props.size)) }, props.children));
};
