import { Size, StandardColor } from '../../../props';
interface ButtonStyleOwnProps {
    /** button color */
    color?: StandardColor;
    /** button size */
    size?: Size;
    /** expand button to full width */
    fullwidth?: boolean;
    /** invert button colors */
    inverted?: boolean;
    /** outlined button */
    outlined?: boolean;
    /** rounded button */
    rounded?: boolean;
    /** is the button selected */
    selected?: boolean;
}
interface ButtonStateOwnProps {
    /** button is hovered state */
    hovered?: boolean;
    /** button focused state */
    focused?: boolean;
    /** button active state */
    active?: boolean;
}
export interface ButtonCommonProps extends ButtonStyleOwnProps, ButtonStateOwnProps {
    /** static button */
    static?: boolean;
    /** disabled button */
    disabled?: boolean;
    /** on button click action */
    onClick?: () => void;
}
export declare function getCommonStyle(props: ButtonCommonProps): string;
export {};
