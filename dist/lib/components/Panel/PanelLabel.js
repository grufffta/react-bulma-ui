import React from 'react';
export var PanelLabel = function (props) { return (React.createElement("label", { className: "panel-block" },
    props.checkbox && React.createElement("input", { type: "checkbox", onChange: props.onCheckboxChanged }),
    props.text || props.children)); };
