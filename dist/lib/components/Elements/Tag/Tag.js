import './tag.scss';
import React from 'react';
import { getColorStyle, getSizeStyle } from '../../../props';
import classnames from 'classnames';
export var Tag = function (props) {
    var style = classnames('tag', { 'is-delete': props.delete }, { 'is-rounded': props.rounded }, getColorStyle(props.color), getSizeStyle(props.size));
    if (props.delete)
        return React.createElement("a", { className: style, onClick: props.onClick }, props.children);
    return React.createElement("span", { className: style, onClick: props.onClick }, props.children);
};
