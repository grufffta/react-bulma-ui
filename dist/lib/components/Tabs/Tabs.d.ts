import './tabs.scss';
import { FunctionComponent } from 'react';
import { Size, Position } from '../../props';
interface TabsOwnProps {
    position?: Position;
    size?: Size;
    boxed?: boolean;
    toggled?: boolean;
    rounded?: boolean;
    fullwidth?: boolean;
}
export declare const Tabs: FunctionComponent<TabsOwnProps>;
export {};
