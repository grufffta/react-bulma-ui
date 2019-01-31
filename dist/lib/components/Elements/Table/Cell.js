import React from 'react';
export var Cell = function (props) {
    var content = props.text || props.children;
    return props.heading
        ? React.createElement("th", null, getContent(props, content))
        : React.createElement("td", null, content);
};
function getContent(_a, content) {
    var text = _a.text, abbreviated = _a.abbreviated;
    if (abbreviated) {
        return React.createElement("abbr", { title: text }, abbreviated);
    }
    return content;
}
