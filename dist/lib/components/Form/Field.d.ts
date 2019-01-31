import './form.scss';
import { FunctionComponent } from 'react';
import { Color, Size } from '../../props';
interface FieldOwnProps {
    label?: string;
    help?: string;
    helpColor?: Color;
    attached?: boolean | 'right' | 'centered';
    grouped?: boolean | 'right' | 'centered' | 'multiline';
    horizontal?: boolean | 'input' | 'button' | Size;
    nav?: boolean;
}
export declare const Field: FunctionComponent<FieldOwnProps>;
export {};
