import * as tslib_1 from "tslib";
import React from 'react';
import { ModalCardHeader } from './ModalCardHeader';
export var ModalCard = function (props) {
    var children = props.children, header = tslib_1.__rest(props, ["children"]);
    return React.createElement("div", { className: 'modal-card' },
        props.title && React.createElement(ModalCardHeader, tslib_1.__assign({}, header)),
        children);
};
