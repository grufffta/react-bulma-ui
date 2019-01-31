import './progress.scss';
import React from 'react';
import { getSizeStyle, getColorStyle } from '../../../props';
import classnames from 'classnames';
export var Progress = function (props) { return (React.createElement("progress", { className: classnames('progress', getSizeStyle(props.size), getColorStyle(props.color)), max: props.max || 100, value: props.value }, props.children)); };
