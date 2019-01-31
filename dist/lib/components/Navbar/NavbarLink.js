import * as tslib_1 from "tslib";
import React from 'react';
import classnames from 'classnames';
export var NavbarLink = function (_a) {
    var active = _a.active, arrowless = _a.arrowless, children = _a.children, props = tslib_1.__rest(_a, ["active", "arrowless", "children"]);
    return React.createElement("a", tslib_1.__assign({ className: classnames('navbar-link', { 'is-arrowless': arrowless }) }, props), children);
};
