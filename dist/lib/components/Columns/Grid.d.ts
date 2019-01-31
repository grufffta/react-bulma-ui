import './grid.scss';
import { FunctionComponent } from 'react';
interface GridOwnProps {
    visibleon?: 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd';
    gapless?: boolean;
    multiline?: boolean;
    vcentered?: boolean;
    centered?: boolean;
}
export declare const Grid: FunctionComponent<GridOwnProps>;
export {};
