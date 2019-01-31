import './icon.scss';
import React, { FunctionComponent } from 'react';
import { IconContainerOwnProps } from './IconContainer';
import { Size } from '../../../props';
export declare type IconElement = React.ReactElement<IconOwnProps>;
export interface IconOwnProps extends IconContainerOwnProps {
    iconSize?: Size;
    style?: 'solid' | 'regular' | 'light' | 'brands';
    name?: string;
    animation?: 'spinner' | 'pulse';
    fixedWidth?: boolean;
    bordered?: boolean;
    inversed?: boolean;
    flip?: 'horizontal' | 'veritcal';
    rotate?: 90 | 180 | 270;
    stacked?: '1x' | '2x';
    panel?: boolean;
}
export declare const Icon: FunctionComponent<IconOwnProps>;
