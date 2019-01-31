import './form.scss';
import React from 'react';
import classnames from 'classnames';
import { getColorStyle } from '../../props';
export var Help = function (props) { return props.text
    ? React.createElement("p", { className: classnames('help', getColorStyle(props.color)) }, props.text)
    : React.createElement(React.Fragment, null); };
