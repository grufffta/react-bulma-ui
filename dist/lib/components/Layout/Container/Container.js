import './container.scss';
import React from 'react';
import classnames from 'classnames';
export var Container = function (props) {
    var _a;
    return (React.createElement("div", { className: classnames('container', { 'is-fluid': props.fluid }, (_a = {}, _a["is-" + props.breakpoint] = props.breakpoint !== undefined, _a), { 'tile is-child': props.tile }) }, props.children));
};
