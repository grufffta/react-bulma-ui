import './footer.scss';
import { FunctionComponent } from 'react';
import { StandardColor } from '../../../props';
interface FooterOwnProps {
    centered?: boolean;
    color?: StandardColor;
    background?: StandardColor;
    tile?: boolean;
}
export declare const Footer: FunctionComponent<FooterOwnProps>;
export {};
