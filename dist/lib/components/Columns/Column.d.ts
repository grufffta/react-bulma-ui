import { FunctionComponent } from 'react';
import { ColumnSize } from '../../props';
declare type GridColumnSize = 'three-quarters' | 'one-quarter' | 'one-third' | 'two-thirds' | 'half' | 'full' | 'four-fiths' | 'three-fiths' | 'two-fifths' | 'one-fifth' | ColumnSize;
declare type TextAlignment = Position | 'justified';
interface ColumnOwnProps {
    alignment?: TextAlignment;
    size?: GridColumnSize;
    offset?: GridColumnSize;
    narrow?: boolean;
    mobileSize?: GridColumnSize;
    mobileOffset?: GridColumnSize;
    mobileNarrow?: boolean;
    tabletSize?: GridColumnSize;
    tabletOffset?: GridColumnSize;
    tabletNarrow?: boolean;
    desktopSize?: GridColumnSize;
    desktopOffset?: GridColumnSize;
    desktopNarrow?: boolean;
    widescreenSize?: GridColumnSize;
    widescreenOffset?: GridColumnSize;
    widescreenNarrow?: boolean;
    fullhdSize?: GridColumnSize;
    fullhdOffset?: GridColumnSize;
    fullhdNarrow?: boolean;
}
export declare const Column: FunctionComponent<ColumnOwnProps>;
export {};
