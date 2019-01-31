export function getColorStyle(color) {
    var _a;
    return _a = {}, _a["is-" + color] = color !== undefined, _a;
}
export function getTextColorStyle(color) {
    var _a;
    return _a = {}, _a["has-text-" + color] = color !== undefined, _a;
}
export function getBackgroundColorStyle(color) {
    var _a;
    return _a = {}, _a["has-background-color-" + color] = color !== undefined, _a;
}
