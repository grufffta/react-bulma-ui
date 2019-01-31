import './grid.scss';
import React from 'react';
import classnames from 'classnames';
export var Grid = function (props) {
    var _a;
    return (React.createElement("div", { className: classnames('columns', (_a = {}, _a["is-" + props.visibleon] = props.visibleon, _a), { 'is-gapless': props.gapless }, { 'is-centered': props.centered }, { 'is-vcentered': props.vcentered }, { 'is-multiline': props.multiline }) }, props.children));
};
