import * as tslib_1 from "tslib";
import './navbar.scss';
import React from 'react';
import classnames from 'classnames';
import { addClass } from '../../util/wrapper';
export var NavbarSection = function (_a) {
    var position = _a.position, tabs = _a.tabs, props = tslib_1.__rest(_a, ["position", "tabs"]);
    var items = props.items || props.children;
    return React.createElement("div", { className: "navbar-" + position },
        renderItem(items, classnames('navbar-item', { 'is-tab': tabs })),
        props.items && props.children);
};
export var renderItem = function (children, classNames) {
    if (typeof children === 'string')
        return React.createElement("a", { className: classNames }, children);
    var element = children;
    var type = element['type'] && element['type'].toString();
    if (type === 'Symbol(react.fragment)' && element.props['children']) {
        return Array.from(element.props.children, function (i) { return renderItem(i, classNames); });
    }
    return addClass(element, classNames);
};
