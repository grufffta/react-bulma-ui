/// <reference types="react" />
import { InputOwnProps, NumericOwnProps, ControlOwnProps } from '../components/Form';
export declare function getInputControlStyle(props: InputOwnProps | NumericOwnProps): string;
export declare function getControlStyle(props: ControlOwnProps | InputOwnProps | NumericOwnProps): string;
export declare function controlCommonProps(props: ControlOwnProps): {
    disabled: boolean | undefined;
    required: boolean | undefined;
    readOnly: boolean | undefined;
    onClick: (() => void) | undefined;
    onChange: ((event: import("react").ChangeEvent<Element>) => void) | undefined;
    onInput: ((event: import("react").FormEvent<Element>) => void) | undefined;
};
