import './button.scss';
import { FunctionComponent } from 'react';
import { Position, Size } from '../../../props';
interface ButtonListOwnProps {
    /** attach buttons in list to each other */
    attached?: boolean;
    /** button position in container */
    position?: Position;
    /** size of all buttons in list */
    size?: Size;
    /** this button list is part of a navbar */
    navbar?: boolean;
    /** this button list is a child tile */
    tile?: boolean;
}
/** list of buttons */
export declare const ButtonList: FunctionComponent<ButtonListOwnProps>;
export {};
