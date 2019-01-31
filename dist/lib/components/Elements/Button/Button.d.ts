import './button.scss';
import { FunctionComponent } from 'react';
import { ButtonCommonProps } from './ButtonCommon';
interface ButtonOwnProps extends ButtonCommonProps {
    /** display loading indicator */
    loading?: boolean;
    tile?: boolean;
}
/** button using html form button element */
export declare const Button: FunctionComponent<ButtonOwnProps>;
export {};
