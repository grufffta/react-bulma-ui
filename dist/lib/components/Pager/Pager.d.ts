import './pager.scss';
import { Component } from 'react';
import { Size, Position } from '../../props';
interface PagerOwnProps {
    showIncrementalButtons?: boolean;
    textPrevious?: string;
    textNext?: string;
    pages: number;
    width?: number;
    position?: Position;
    size?: Size;
    rounded?: boolean;
}
interface PagerOwnState {
    current: number;
}
export declare class Pager extends Component<PagerOwnProps, PagerOwnState> {
    state: {
        current: number;
    };
    render(): JSX.Element;
    private getIndexFor;
    private getPagerStyle;
    private incrementPage;
    private decrementPage;
    private setPage;
    private renderElipsis;
    private renderPageLink;
    private renderIncrementalLink;
}
export {};
