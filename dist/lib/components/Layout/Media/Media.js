import * as tslib_1 from "tslib";
import './media.scss';
import React from 'react';
import { Delete, Image } from '../../Elements';
import classnames from 'classnames';
export var Media = function (props) { return (React.createElement("article", { className: classnames('media', { 'tile is-child': props.tile }) },
    props.src && React.createElement(Image, tslib_1.__assign({ media: true, dimensions: props.dimensions || '64x64', src: props.src }, props)),
    React.createElement("main", { className: 'media-content' }, props.children),
    props.onDelete && renderDeleteButton(props.onDelete))); };
var renderDeleteButton = function (handler) { return (React.createElement("div", { className: 'media-right' },
    React.createElement(Delete, { onClick: handler }))); };
