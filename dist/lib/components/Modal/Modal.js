import './modal.scss';
import React from 'react';
import classnames from 'classnames';
export var Modal = function (props) { return (React.createElement("div", { className: classnames('modal', { 'is-active': props.visible }) },
    React.createElement("div", { className: 'modal-background', onClick: props.onClose }),
    props.children,
    props.onClose && React.createElement("button", { className: 'modal-close is-large', "aria-label": 'close', onClick: props.onClose }))); };
