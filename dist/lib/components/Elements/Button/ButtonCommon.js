import classnames from 'classnames';
import { getColorStyle, getSizeStyle } from '../../../props';
export function getCommonStyle(props) {
    return classnames('button', getButtonStyle(props), getButtonStateStyle(props), { 'is-static': props.static });
}
function getButtonStyle(props) {
    return [
        getColorStyle(props.color),
        getSizeStyle(props.size),
        { 'is-outlined': props.outlined },
        { 'is-inverted': props.inverted },
        { 'is-rounded': props.rounded },
        { 'is-fullwidth': props.fullwidth },
        { 'is-selected': props.selected }
    ];
}
function getButtonStateStyle(props) {
    return [
        { 'is-hovered': props.hovered },
        { 'is-focussed': props.focused },
        { 'is-active': props.active },
    ];
}
