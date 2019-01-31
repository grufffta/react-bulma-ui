import './form.scss';
import React from 'react';
import classnames from 'classnames';
import { Help } from './';
export var Field = function (props) {
    var label = props.label && React.createElement("label", { className: 'label' }, props.label);
    var field = React.createElement("div", { className: classnames('field', { 'navbar-item': props.nav }, { 'is-grouped': props.grouped }, { 'is-grouped-centered': props.grouped === 'centered' }, { 'is-grouped-right': props.grouped === 'right' }, { 'is-grouped-multiline': props.grouped === 'multiline' }, { 'has-addons': props.attached }, { 'has-addons-centered': props.attached === 'centered' }, { 'has-addons-right': props.attached === 'right' }) },
        !props.horizontal && label,
        props.children,
        !props.attached && React.createElement(Help, { color: props.helpColor, text: props.help }));
    if (props.horizontal) {
        return React.createElement("div", { className: classnames('field', { 'is-horizontal': props.horizontal }) },
            React.createElement("div", { className: classnames('field-label', { 'is-small': props.horizontal == 'small' }, { 'is-medium': props.horizontal == 'medium' }, { 'is-large': props.horizontal == 'large' }, { 'is-normal': props.horizontal === 'input' || props.horizontal === 'button' }) }, label),
            React.createElement("div", { className: 'field-body' }, field));
    }
    return field;
};
