import * as tslib_1 from "tslib";
import React from 'react';
import classnames from 'classnames';
export var DropdownLink = function (_a) {
    var navbar = _a.navbar, active = _a.active, props = tslib_1.__rest(_a, ["navbar", "active"]);
    return (React.createElement("a", tslib_1.__assign({ className: classnames(navbar ? 'navbar-item' : 'dropdown-item', { 'is-active': active }) }, props), props.children));
};
