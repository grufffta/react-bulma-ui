import './form.scss';
import { FunctionComponent } from 'react';
import { ControlOwnProps } from './';
interface SelectInputControlOwnProps extends ControlOwnProps {
    multiple?: boolean;
    rows?: number;
    fullWidth?: boolean;
}
export declare const Select: FunctionComponent<SelectInputControlOwnProps>;
export {};
