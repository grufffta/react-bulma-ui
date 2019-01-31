import React from 'react';
import classnames from 'classnames';
export var NavbarBurger = function (props) { return (React.createElement("a", { role: "button", onClick: function () { return props.onClick(); }, className: classnames('navbar-burger burger', { 'is-active': props.visible }), "aria-label": "menu", "aria-expanded": "false" },
    React.createElement("span", { "aria-hidden": "true" }),
    React.createElement("span", { "aria-hidden": "true" }),
    React.createElement("span", { "aria-hidden": "true" }))); };
