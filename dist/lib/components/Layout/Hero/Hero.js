import './hero.scss';
import React from "react";
import { getColorStyle, getSizeStyle } from "../../../props";
import classnames from "classnames";
import { Container } from '../Container';
import { Title } from '../../Elements';
export var Hero = function (props) { return (React.createElement("section", { className: classnames('hero', { 'is-bold': props.gradient }, { 'is-fullheight': props.fullheight }, { 'is-fullheight-with-navbar': props.fullheight === 'fullheight-with-navbar' }, { 'tile is-child': props.tile }, getColorStyle(props.color), getSizeStyle(props.size)) },
    React.createElement("div", { className: 'hero-body' },
        props.header && React.createElement("div", { className: 'hero-head' },
            " ",
            props.header),
        React.createElement(Container, null,
            props.title && React.createElement(Title, null, props.title),
            props.subtitle && React.createElement(Title, { subtitle: true }, props.subtitle)),
        props.footer && React.createElement("div", { className: 'hero-foot' }, props.footer)))); };
