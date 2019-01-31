import './notification.scss';
import React from 'react';
import classnames from 'classnames';
import { getColorStyle } from '../../../props';
import { Delete } from '../Delete';
export var Notification = function (props) { return (React.createElement("article", { className: classnames('notification', { 'tile is-child': props.tile }, getColorStyle(props.color)) },
    props.onClose && React.createElement(Delete, { onClick: props.onClose }),
    props.children)); };
