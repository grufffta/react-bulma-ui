import * as tslib_1 from "tslib";
import React from "react";
import classnames from "classnames";
export var TabItem = function (_a) {
    var active = _a.active, props = tslib_1.__rest(_a, ["active"]);
    return (React.createElement("li", { className: classnames({ 'is-active': active }) },
        React.createElement("a", tslib_1.__assign({}, props), props.children)));
};
