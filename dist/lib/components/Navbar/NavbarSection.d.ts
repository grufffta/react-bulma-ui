import './navbar.scss';
import React, { FunctionComponent } from 'react';
interface NavbarSectionProps {
    position: 'brand' | 'start' | 'end';
    tabs?: boolean;
    items?: string | React.ReactNodeArray;
}
export declare const NavbarSection: FunctionComponent<NavbarSectionProps>;
export declare const renderItem: (children: React.ReactNode, classNames: string) => any;
export {};
