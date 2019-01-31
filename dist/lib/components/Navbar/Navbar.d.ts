import './navbar.scss';
import React, { Component } from 'react';
import { StandardColor } from '../../props';
declare type NavbarFixedPostion = 'top' | 'bottom';
interface NavbarOwnProps {
    brand?: string | React.ReactNodeArray;
    fixed?: NavbarFixedPostion;
    shadow?: boolean;
    color?: StandardColor;
    transparent?: boolean;
    boxed?: boolean;
}
interface NavbarOwnState {
    visible: boolean;
}
export declare class Navbar extends Component<NavbarOwnProps, NavbarOwnState> {
    state: {
        visible: boolean;
    };
    render(): JSX.Element;
    private toggleMenu;
    private setBodyAttributes;
}
export {};
