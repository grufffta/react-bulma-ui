import './card.scss';
import React from 'react';
import classnames from 'classnames';
export var Card = function (props) { return (React.createElement("div", { className: classnames('card', { 'tile is-child': props.tile }) }, props.children)); };
