import './form.scss';
import { FunctionComponent } from 'react';
import { ControlOwnProps } from './';
export interface NumericOwnProps extends ControlOwnProps {
    type: 'number' | 'range';
    horizontal?: boolean;
    max?: number;
    min?: number;
    step?: number;
    pattern?: string;
    title?: string;
}
export declare const Numeric: FunctionComponent<NumericOwnProps>;
