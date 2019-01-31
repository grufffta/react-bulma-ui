import './message.scss';
import React from 'react';
import classnames from 'classnames';
import { getColorStyle, getSizeStyle } from '../../props';
import { Delete } from '../Elements';
export var Message = function (props) { return (React.createElement("article", { className: classnames('message', { 'tile is-child': props.tile }, getColorStyle(props.color), getSizeStyle(props.size)) },
    props.header && React.createElement("header", { className: 'message-header' },
        React.createElement("p", null, props.header),
        props.onClose && React.createElement(Delete, { onClick: props.onClose })),
    React.createElement("main", { className: 'message-body' }, props.children))); };
