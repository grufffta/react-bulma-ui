import React from 'react';
import { addClass } from '../../util/wrapper';
export var CardFooter = function (props) { return (React.createElement("footer", { className: "card-footer" }, addClass(props.children, 'card-footer-item'))); };
