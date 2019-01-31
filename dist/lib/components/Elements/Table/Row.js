import React from 'react';
import classnames from 'classnames';
export var Row = function (props) { return (React.createElement("tr", { className: classnames({ 'is-selected': props.selected }), onClick: props.onClick }, props.children)); };
