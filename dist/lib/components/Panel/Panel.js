import './panel.scss';
import React from 'react';
import classnames from 'classnames';
export var Panel = function (props) { return (React.createElement("nav", { className: classnames('panel', { 'tile is-child': props.tile }) },
    React.createElement("p", { className: "panel-heading" }, props.heading),
    props.children)); };
