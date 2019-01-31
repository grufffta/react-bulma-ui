import './form.scss';
import React, { cloneElement } from 'react';
import { getControlStyle } from '../../props';
import classnames from 'classnames';
export var Control = function (props) {
    return React.createElement("div", { className: classnames('control', getControlStyle(props), { 'is-expanded': props.expanded }, { 'has-icons-left': props.iconLeft }, { 'has-icons-right': props.iconRight }) },
        props.children,
        props.iconLeft && cloneElement(props.iconLeft, { position: 'left' }),
        props.iconRight && cloneElement(props.iconRight, { position: 'right' }));
};
