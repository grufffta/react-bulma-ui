import './progress.scss';
import { FunctionComponent } from 'react';
import { StandardColor, Size } from '../../../props';
interface ProgressOwnProps {
    color?: StandardColor;
    size?: Size;
    value?: number;
    max?: number;
}
export declare const Progress: FunctionComponent<ProgressOwnProps>;
export {};
