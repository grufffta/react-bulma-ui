/// <reference types="react" />
import './delete.scss';
import { Size } from '../../../props';
export interface DeleteOwnProps {
    size?: Size;
    button?: boolean;
    onClick?: () => void;
}
export declare const Delete: (props: DeleteOwnProps) => JSX.Element;
