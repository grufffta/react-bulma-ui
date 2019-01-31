import './notification.scss';
import { FunctionComponent } from 'react';
import { StandardColor } from '../../../props';
interface NotificationOwnProps {
    color?: StandardColor;
    tile?: boolean;
    onClose?: () => void;
}
export declare const Notification: FunctionComponent<NotificationOwnProps>;
export {};
