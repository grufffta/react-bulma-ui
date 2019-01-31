import './media.scss';
import { FunctionComponent } from 'react';
interface MediaOwnProps {
    src?: string;
    alt?: string;
    dimensions?: '48x48' | '64x64';
    tile?: boolean;
    rounded?: boolean;
    onDelete: () => void;
}
export declare const Media: FunctionComponent<MediaOwnProps>;
export {};
