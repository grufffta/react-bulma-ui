import classnames from 'classnames';
import { getSizeStyle, getColorStyle } from './';
export function getInputControlStyle(props) {
    return classnames('input', getControlStyle(props), { 'is-focused': props.focused }, { 'is-normal': props.horizontal && !props.size });
}
export function getControlStyle(props) {
    return classnames(getSizeStyle(props.size), getColorStyle(props.color), { 'is-loading': props.loading }, { 'is-rounded': props.rounded }, { 'is-hovered': props.hovered }, { 'is-static': props.static });
}
export function controlCommonProps(props) {
    return {
        disabled: props.disabled,
        required: props.required,
        readOnly: props.readonly,
        onClick: props.onClick,
        onChange: props.onChange,
        onInput: props.onInput
    };
}
