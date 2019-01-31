import './tile.scss';
import React from "react";
import classnames from 'classnames';
export var Tile = function (props) {
    var _a, _b;
    return (React.createElement("div", { className: classnames('tile', { 'is-vertical': props.vertical }, (_a = {}, _a["is-" + props.context] = props.context !== undefined, _a), (_b = {}, _b["is-" + props.size] = props.size !== undefined, _b)) }, props.children));
};
