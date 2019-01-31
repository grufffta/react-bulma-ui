import './tile.scss';
import { FunctionComponent } from "react";
import { ColumnSize } from "../../../props";
interface TileOwnProps {
    context?: 'ancestor' | 'parent';
    vertical?: boolean;
    size?: ColumnSize;
}
export declare const Tile: FunctionComponent<TileOwnProps>;
export {};
