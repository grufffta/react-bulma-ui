import './title.scss';
import { FunctionComponent } from 'react';
import { TextSize, VerticalAlignment } from '../../../props';
interface TitleOwnProps {
    size?: TextSize;
    paragraph?: boolean;
    subtitle?: boolean;
    heading?: boolean;
    spaced?: boolean;
    valign?: VerticalAlignment;
}
export declare const Title: FunctionComponent<TitleOwnProps>;
export {};
