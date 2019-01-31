import React from 'react';
import classnames from 'classnames';
export var PagerLink = function (props) { return (React.createElement("li", { key: "page-" + props.page },
    React.createElement("a", { "aria-label": "Goto page " + props.page, className: classnames('pagination-link', { 'is-current': props.page === props.current }), onClick: function (e) { return props.onClick(props.page); } }, props.page))); };
