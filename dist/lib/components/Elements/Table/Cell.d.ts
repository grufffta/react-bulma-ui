import { FunctionComponent } from 'react';
export declare type CellElement = CellOwnProps & JSX.Element;
export interface CellOwnProps {
    heading?: boolean;
    text?: string;
    abbreviated?: string;
}
export declare const Cell: FunctionComponent<CellOwnProps>;
