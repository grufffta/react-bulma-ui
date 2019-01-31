import { FunctionComponent } from 'react';
import { LinkOwnProps } from '../../props';
export interface DropdownLinkOwnProps extends LinkOwnProps {
    navbar?: boolean;
}
export declare const DropdownLink: FunctionComponent<DropdownLinkOwnProps>;
