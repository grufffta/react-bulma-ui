import React from 'react';
import classnames from 'classnames';
export var CardHeader = function (_a) {
    var title = _a.title, centered = _a.centered, icon = _a.icon;
    return (React.createElement("header", { className: 'card-header' },
        title && React.createElement("p", { className: getTitleStyle(title, centered) }, title),
        icon && React.createElement("div", { className: 'card-header-icon' }, icon)));
};
var getTitleStyle = function (title, centered) { return classnames('card-header-title', { 'is-centered': centered }); };
