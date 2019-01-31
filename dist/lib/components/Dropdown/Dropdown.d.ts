import './dropdown.scss';
import { FunctionComponent } from 'react';
interface DropdownOwnProps {
    text: string;
    hoverable?: boolean;
    active?: boolean;
    right?: boolean;
    dropup?: boolean;
    navbar?: boolean;
    arrowless?: boolean;
}
export declare const Dropdown: FunctionComponent<DropdownOwnProps>;
export {};
