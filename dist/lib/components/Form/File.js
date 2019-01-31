import './form.scss';
import React from 'react';
import classnames from 'classnames';
import { getColorStyle, getSizeStyle } from '../../props';
export var File = function (props) {
    var _a;
    return (React.createElement("div", { className: classnames('file', getColorStyle(props.color), getSizeStyle(props.size), (_a = {}, _a["is-" + props.alignment] = props.alignment !== undefined, _a), { 'has-name': props.showFilename }, { 'is-right': props.right }, { 'is-boxed': props.boxed }) },
        React.createElement("label", { className: 'file-label' },
            React.createElement("input", { id: props.name, className: "file-input", type: "file", name: props.name, onChange: props.onChange }),
            React.createElement("span", { className: "file-cta" },
                props.icon && React.createElement("span", { className: 'file-icon' }, props.icon),
                props.label && React.createElement("span", { className: 'file-label' }, props.label)),
            props.showFilename && React.createElement("span", { className: classnames('file-name', { 'is-fullwidth': props.expanded }) }, props.filename))));
};
