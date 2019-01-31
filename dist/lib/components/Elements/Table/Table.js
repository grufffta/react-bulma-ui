import './table.scss';
import React from 'react';
import classnames from 'classnames';
export var Table = function (props) { return (React.createElement("table", { className: classnames('table', { 'is-bordered': props.bordered }, { 'is-striped': props.striped }, { 'is-narrow': props.narrow }, { 'is-hoverable': props.hoverable }, { 'is-fullwidth': props.fullwidth }, { 'tile is-child': props.tile }) },
    props.header && React.createElement("thead", null, props.header),
    React.createElement("tbody", null, props.children),
    props.footer && React.createElement("tfoot", null, props.footer))); };
