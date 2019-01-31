import * as tslib_1 from "tslib";
import React from 'react';
import classnames from 'classnames';
export var PanelLink = function (_a) {
    var active = _a.active, tab = _a.tab, props = tslib_1.__rest(_a, ["active", "tab"]);
    return (React.createElement("a", tslib_1.__assign({ className: classnames(tab ? '' : 'panel-block', { 'is-active': active }) }, props), props.children));
};
