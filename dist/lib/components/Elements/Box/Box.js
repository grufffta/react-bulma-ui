import './box.scss';
import React from 'react';
import classnames from 'classnames';
export var Box = function (_a) {
    var tile = _a.tile, children = _a.children;
    return React.createElement("div", { className: classnames('box', { 'tile is-child': tile }) }, children);
};
