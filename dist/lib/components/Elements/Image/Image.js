import './image.scss';
import classnames from 'classnames';
import React from 'react';
export var Image = function (props) {
    var _a, _b;
    if (props.media) {
        return (React.createElement("figure", { className: 'media-left' },
            React.createElement("p", { className: classnames('image', (_a = {}, _a["is-" + props.dimensions] = props.dimensions !== undefined, _a)) }, renderImage(props))));
    }
    else if (props.navbar) {
        return renderImage(props);
    }
    return (React.createElement("figure", { className: classnames('image', (_b = {}, _b["is-" + props.dimensions] = props.dimensions !== undefined, _b), { 'tile is-child': props.tile }) }, renderImage(props)));
};
var renderImage = function (_a) {
    var src = _a.src, rounded = _a.rounded, alt = _a.alt;
    return React.createElement("img", { className: classnames({ 'is-rounded': rounded }), src: src, alt: alt });
};
