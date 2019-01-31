import { FunctionComponent } from 'react';
import { LinkOwnProps } from '../../props';
interface NavbarLinkOwnProps extends LinkOwnProps {
    arrowless?: boolean;
}
export declare const NavbarLink: FunctionComponent<NavbarLinkOwnProps>;
export {};
