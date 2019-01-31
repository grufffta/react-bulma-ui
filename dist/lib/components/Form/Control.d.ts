import './form.scss';
import { FunctionComponent, ChangeEvent, FormEvent } from 'react';
import { Color, Size } from '../../props';
import { IconElement } from '../Elements';
export interface FormStateProps {
    hovered?: boolean;
    focused?: boolean;
    loading?: boolean;
    disabled?: boolean;
    readonly?: boolean;
}
export interface ControlOwnProps extends FormStateProps {
    name?: string;
    iconLeft?: IconElement;
    iconRight?: IconElement;
    value?: string;
    color?: Color;
    size?: Size;
    static?: boolean;
    required?: boolean;
    placeholder?: string;
    expanded?: boolean;
    rounded?: boolean;
    help?: string;
    helpColor?: Color;
    onClick?: () => void;
    onChange?: (event: ChangeEvent) => void;
    onInput?: (event: FormEvent) => void;
}
export declare const Control: FunctionComponent<ControlOwnProps>;
