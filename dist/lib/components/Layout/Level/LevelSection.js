import * as tslib_1 from "tslib";
import React from 'react';
import classnames from 'classnames';
export var LevelSection = function (props) {
    var items = getLevelItems(props.children, props);
    return props.position === 'centered'
        ? React.createElement(React.Fragment, null, items)
        : React.createElement("div", { className: "level-" + props.position }, items);
};
var LevelItem = function (props) { return (React.createElement("div", { className: classnames('level-item', { 'has-text-centered': props.position === 'centered' }) }, props.children)); };
function getLevelItems(children, props) {
    return React.Children.map(children, function (i) { return React.createElement(LevelItem, tslib_1.__assign({}, props), i); });
}
