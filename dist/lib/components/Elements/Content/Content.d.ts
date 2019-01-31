import './content.scss';
import { FunctionComponent } from 'react';
import { Size, ElementColor } from '../../../props';
interface ContentOwnProps {
    tile?: boolean;
    size?: Size;
    centered?: boolean;
    color?: ElementColor;
    background?: ElementColor;
    orderedListMarker?: 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman';
}
export declare const Content: FunctionComponent<ContentOwnProps>;
export {};
