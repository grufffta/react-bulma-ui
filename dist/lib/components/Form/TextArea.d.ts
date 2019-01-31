import './form.scss';
import { FunctionComponent, ChangeEvent } from 'react';
import { FormStateProps } from './';
import { Color, Size } from '../../props';
interface TextAreaOwnProps extends FormStateProps {
    name?: string;
    bind?: boolean | 'on-input';
    placeholder?: string;
    rows?: number;
    color?: Color;
    size?: Size;
    text?: string;
    fixedSize?: boolean;
    onchange?: (event: ChangeEvent) => void;
}
export declare const TextArea: FunctionComponent<TextAreaOwnProps>;
export {};
