import React from 'react';
import classnames from 'classnames';
import { getTextColorStyle } from '../../../props';
export var FontAwesomeIcon = function (props) {
    var _a, _b;
    return (React.createElement("i", { className: classnames({ 'fas': props.style === 'solid' }, { 'far': props.style === undefined || props.style === 'regular' }, { 'fal': props.style === 'light' }, { 'fab': props.style === 'brands' }, { 'fa-fw': props.fixedWidth }, { 'fa-border': props.bordered }, { 'fa-inverse': props.inversed }, (_a = {}, _a["fa-" + props.animation] = props.animation !== undefined, _a), { 'fa-lg': props.size === undefined && props.iconSize === 'large' }, { 'fa-lg': props.size === 'medium' && (props.iconSize === undefined || props.iconSize === 'medium') }, { 'fa-2x': props.size === 'medium' && props.iconSize === 'large' }, { 'fa-lg': props.size === 'large' && props.iconSize === undefined }, { 'fa-2x': props.size === 'large' && props.iconSize === 'medium' }, { 'fa-3x': props.size === 'large' && props.iconSize === 'large' }, (_b = {}, _b["fa-stacked-" + props.stacked] = props.stacked !== undefined, _b), props.stacked && getTextColorStyle(props.color), "fa-" + props.name) }));
};
