import * as tslib_1 from "tslib";
import classnames from 'classnames';
import { isArray } from 'util';
export function wrap(e, wrapfunc) {
    var children = e;
    if (children) {
        return children.map(function (i) { return wrapfunc(i); });
    }
    return wrapfunc(e);
}
export function addClass(node, className) {
    var element = node;
    if (element === undefined) {
        return element;
    }
    if (isArray(element)) {
        return Array.from(element, function (i) { return addClass(i, className); });
    }
    return addClassToElement(element, className);
}
export function addClassToElement(element, className) {
    if (element && element.props) {
        if (element.props['className'] && element.props.className) {
            className = classnames(className, element.props.className);
        }
        if (element.props['active'] && element.props.active) {
            className = classnames({ 'is-active': element.props.active }, className);
        }
        if (element.props['expanded'] && element.props.expanded) {
            className = classnames({ 'is-expanded': element.props.active }, className);
        }
    }
    return tslib_1.__assign({}, element, { props: tslib_1.__assign({}, element.props, { className: className }) });
}
