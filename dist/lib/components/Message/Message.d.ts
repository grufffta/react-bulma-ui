import './message.scss';
import { FunctionComponent } from 'react';
import { Size, StandardColor } from '../../props';
interface MessageOwnProps {
    header?: string;
    color?: StandardColor;
    size?: Size;
    tile?: boolean;
    onClose?: () => void;
}
export declare const Message: FunctionComponent<MessageOwnProps>;
export {};
