import './button.scss';
import { FunctionComponent } from 'react';
import { ButtonCommonProps } from './ButtonCommon';
export interface InputButtonOwnProps extends ButtonCommonProps {
    /** input button value */
    value?: string | number;
}
export declare const InputButton: FunctionComponent<InputButtonOwnProps & {
    type: string | undefined;
}>;
