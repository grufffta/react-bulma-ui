import './table.scss';
import { FunctionComponent } from 'react';
import { CellElement } from './Cell';
interface TableOwnProps {
    bordered?: boolean;
    striped?: boolean;
    narrow?: boolean;
    hoverable?: boolean;
    fullwidth?: boolean;
    tile?: boolean;
    header?: Array<CellElement>;
    footer?: Array<CellElement>;
}
export declare const Table: FunctionComponent<TableOwnProps>;
export {};
