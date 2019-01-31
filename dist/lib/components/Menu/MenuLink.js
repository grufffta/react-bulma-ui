import * as tslib_1 from "tslib";
import React from 'react';
import classnames from 'classnames';
import { isArray } from 'util';
export var MenuLink = function (props) {
    if (isArray(props.children)) {
        return (React.createElement("li", null,
            createLink(props, props.children[0]),
            React.createElement("ul", null, props.children.slice(1))));
    }
    return React.createElement("li", null, createLink(props, props.children));
};
var createLink = function (_a, content) {
    var active = _a.active, props = tslib_1.__rest(_a, ["active"]);
    return (React.createElement("a", tslib_1.__assign({ className: classnames({ 'is-active': active }) }, props), content));
};
