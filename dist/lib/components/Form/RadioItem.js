import * as tslib_1 from "tslib";
import './form.scss';
import React from 'react';
export var RadioItem = function (props) { return (React.createElement("label", tslib_1.__assign({ className: 'radio' }, props.disabled),
    React.createElement("input", { type: 'radio', name: props.name, disabled: props.disabled, defaultChecked: props.checked, onChange: props.onChange }),
    props.value || props.children)); };
