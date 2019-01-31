import './content.scss';
import React from 'react';
import classnames from 'classnames';
import { getTextColorStyle, getBackgroundColorStyle } from '../../../props';
export var Content = function (props) {
    var _a, _b;
    return (React.createElement("div", { className: classnames('content', (_a = {}, _a["is-" + props.size] = props.size !== undefined, _a), (_b = {}, _b["is-" + props.orderedListMarker] = props.orderedListMarker !== undefined, _b), { 'has-text-centered': props.centered }, { 'tile is-child': props.tile }, getTextColorStyle(props.color), getBackgroundColorStyle(props.background)) }, props.children));
};
