import * as tslib_1 from "tslib";
import './footer.scss';
import React from 'react';
import { Content } from '../../Elements';
import classnames from 'classnames';
export var Footer = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return (React.createElement("footer", { className: classnames('footer', { 'tile is-child': props.tile }) },
        React.createElement(Content, tslib_1.__assign({}, props), children)));
};
