import './form.scss';
import { FunctionComponent, ChangeEvent } from 'react';
export interface RadioItemOwnProps {
    name: string;
    disabled?: boolean;
    bind?: 'on-input' | boolean;
    checked?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent) => void;
}
export declare const RadioItem: FunctionComponent<RadioItemOwnProps>;
