import './tag.scss';
import React from 'react';
import classnames from 'classnames';
export var TagList = function (_a) {
    var attached = _a.attached, children = _a.children;
    return (React.createElement("div", { className: classnames('tags', { 'has-addons': attached }) }, children));
};
