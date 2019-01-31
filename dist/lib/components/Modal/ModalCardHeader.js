import React from 'react';
export var ModalCardHeader = function (props) {
    return React.createElement("header", { className: 'modal-card-head' },
        React.createElement("p", { className: 'modal-card-title' }, props.title || props.children),
        props.onClose && React.createElement("button", { className: 'delete', "aria-label": 'close', onClick: props.onClose }));
};
