import './form.scss';
import { FunctionComponent, ChangeEvent } from 'react';
import { Color, Size } from '../../props';
import { IconElement } from '../Elements';
interface FileOwnProps {
    name?: string;
    showFilename?: boolean;
    expanded?: boolean;
    filename?: string;
    label?: string;
    icon?: IconElement;
    right?: boolean;
    boxed?: boolean;
    color?: Color;
    size?: Size;
    alignment?: 'centered' | 'right';
    onChange?: (event: ChangeEvent) => void;
}
export declare const File: FunctionComponent<FileOwnProps>;
export {};
