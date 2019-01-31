import './button.scss';
import React from 'react';
import { getCommonStyle } from './ButtonCommon';
export var InputButton = function (props) { return React.createElement("input", { type: props.type, value: props.value, className: getCommonStyle(props), disabled: props.disabled }); };
