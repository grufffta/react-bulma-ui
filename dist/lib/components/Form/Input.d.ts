import './form.scss';
import { FunctionComponent } from 'react';
import { ControlOwnProps } from './';
export interface InputOwnProps extends ControlOwnProps {
    type: 'button' | 'color' | 'date' | 'email' | 'hidden' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
    horizontal?: boolean;
    pattern?: string;
    title?: string;
}
export declare const Input: FunctionComponent<InputOwnProps>;
