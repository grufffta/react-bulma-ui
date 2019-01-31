import './delete.scss';
import React from 'react';
import { getSizeStyle } from '../../../props';
import classnames from 'classnames';
export var Delete = function (props) {
    var style = classnames('delete', getSizeStyle(props.size));
    return props.button === true
        ? React.createElement("button", { className: style, onClick: props.onClick })
        : React.createElement("a", { className: style, onClick: props.onClick });
};
