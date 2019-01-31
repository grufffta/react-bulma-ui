import './section.scss';
import React from 'react';
import classnames from 'classnames';
export var Section = function (_a) {
    var spacing = _a.spacing, children = _a.children;
    var _b;
    return (React.createElement("section", { className: classnames('section', (_b = {}, _b["is-" + spacing] = spacing !== undefined, _b)) }, children));
};
