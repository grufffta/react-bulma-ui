import React from 'react';
import classnames from 'classnames';
export var Column = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return (React.createElement("div", { className: classnames('column', getTextAlignment(props.alignment), { 'is-narrow': props.narrow }, { 'is-narrow-mobile': props.mobileNarrow }, { 'is-narrow-tablet': props.tabletNarrow }, { 'is-narrow-desktop': props.desktopNarrow }, { 'is-narrow-widescreen': props.widescreenNarrow }, { 'is-narrow-fullhd': props.fullhdNarrow }, (_a = {}, _a["is-" + props.size] = props.size !== undefined, _a), (_b = {}, _b["is-offset-" + props.offset] = props.offset !== undefined, _b), (_c = {}, _c["is-" + props.mobileSize + "-mobile"] = props.mobileSize !== undefined, _c), (_d = {}, _d["is-offset-" + props.mobileOffset + "-mobile"] = props.mobileOffset !== undefined, _d), (_e = {}, _e["is-" + props.tabletSize + "-tablet"] = props.tabletSize !== undefined, _e), (_f = {}, _f["is-offset-" + props.tabletOffset + "-tablet"] = props.tabletOffset !== undefined, _f), (_g = {}, _g["is-" + props.desktopSize + "-desktop"] = props.desktopSize !== undefined, _g), (_h = {}, _h["is-offset-" + props.desktopOffset + "-desktop"] = props.desktopOffset !== undefined, _h), (_j = {}, _j["is-" + props.widescreenSize + "-widescreen"] = props.widescreenSize !== undefined, _j), (_k = {}, _k["is-offset-" + props.widescreenOffset + "-widescreen"] = props.widescreenOffset !== undefined, _k), (_l = {}, _l["is-" + props.fullhdSize + "-fullhd"] = props.fullhdSize !== undefined, _l), (_m = {}, _m["is-offset-" + props.fullhdOffset + "-fullhd"] = props.fullhdOffset !== undefined, _m)) }, props.children));
};
function getTextAlignment(position) {
    var _a;
    return _a = {}, _a["has-text-" + position] = position !== undefined, _a;
}
