import './form.scss';
import { FunctionComponent, ChangeEvent } from 'react';
interface CheckboxOwnProps {
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: ChangeEvent) => void;
}
export declare const Checkbox: FunctionComponent<CheckboxOwnProps>;
export {};
