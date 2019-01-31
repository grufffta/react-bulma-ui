import './level.scss';
import React from 'react';
import classnames from 'classnames';
export var Level = function (_a) {
    var mobile = _a.mobile, children = _a.children;
    return (React.createElement("nav", { className: classnames('level', { 'is-mobile': mobile }) }, children));
};
