import './tile.scss'
import React, { FunctionComponent, ReactChild } from "react";
import classnames from 'classnames'
import { ColumnSize } from "../../../props";

interface TileOwnProps {
  context?: 'ancestor' | 'parent'
  vertical?: boolean;
  size?: ColumnSize
}

export const Tile: FunctionComponent<TileOwnProps> = (props) => (
  <div className={classnames('tile',
    { 'is-vertical': props.vertical },
    { [`is-${props.context}`]: props.context !== undefined },
    { [`is-${props.size}`]: props.size !== undefined })}>
    {props.children}
  </div>
)