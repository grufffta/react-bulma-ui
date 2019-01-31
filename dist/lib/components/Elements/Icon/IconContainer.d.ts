import './icon.scss';
import { FunctionComponent } from 'react';
import { ElementColor, Size } from '../../../props';
export interface IconContainerOwnProps {
    position?: 'left' | 'right';
    color?: ElementColor;
    size?: Size;
    panel?: boolean;
}
export declare const IconContainer: FunctionComponent<IconContainerOwnProps>;
