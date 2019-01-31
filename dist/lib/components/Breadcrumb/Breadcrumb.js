import './breadcrumb.scss';
import React from 'react';
import { getPositionStyle, getSizeStyle } from '../../props';
import classnames from 'classnames';
export var Breadcrumb = function (props) {
    return (React.createElement("nav", { className: getStyle(props), "aria-label": 'breadcrumbs' },
        React.createElement("ul", null, props.children)));
};
function getStyle(props) {
    var _a;
    return classnames('breadcrumb', getPositionStyle(props.position), getSizeStyle(props.size), (_a = {}, _a["has-" + props.seperator + "-separator"] = props.seperator !== undefined, _a));
}
