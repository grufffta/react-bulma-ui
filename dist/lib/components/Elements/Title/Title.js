import './title.scss';
import React from 'react';
import classnames from 'classnames';
export var Title = function (props) {
    var _a;
    var classes = classnames({ 'title': props.subtitle === undefined && props.heading === undefined }, { 'subtitle': props.subtitle }, { 'heading': props.heading }, (_a = {}, _a["is-" + props.size] = props.size !== undefined, _a), { 'is-spaced': props.spaced === true });
    var size = props.paragraph === undefined ? props.size : undefined;
    var style = getVerticalAlignStyle(props.valign);
    return create(classes, style, size, props.children);
};
function create(classes, style, size, children) {
    switch (size) {
        case 1: return React.createElement("h1", { className: classes, style: style }, children);
        case 2: return React.createElement("h2", { className: classes, style: style }, children);
        case 3: return React.createElement("h3", { className: classes, style: style }, children);
        case 4: return React.createElement("h4", { className: classes, style: style }, children);
        case 5: return React.createElement("h5", { className: classes, style: style }, children);
        case 6: return React.createElement("h6", { className: classes, style: style }, children);
        default:
            return React.createElement("p", { className: classes, style: style }, children);
    }
}
function getVerticalAlignStyle(valign) {
    if (valign !== undefined)
        return { 'display': 'flex', 'align-items': valign };
    return {};
}
