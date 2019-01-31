import * as tslib_1 from "tslib";
import './form.scss';
import React from 'react';
import { Control } from './';
export var Checkbox = function (props) { return (React.createElement(Control, tslib_1.__assign({}, props),
    React.createElement("label", tslib_1.__assign({ className: 'checkbox' }, props.disabled),
        React.createElement("input", { id: props.name, type: 'checkbox', disabled: props.disabled, defaultChecked: props.checked, onChange: props.onChange }),
        "\u00A0",
        props.children))); };
