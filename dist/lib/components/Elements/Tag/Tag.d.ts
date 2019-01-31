import './tag.scss';
import { FunctionComponent } from 'react';
import { StandardColor, Size } from '../../../props';
interface TagOwnProps {
    color?: StandardColor;
    rounded?: boolean;
    size?: Size;
    delete?: boolean;
    onClick?: () => void;
}
export declare const Tag: FunctionComponent<TagOwnProps>;
export {};
