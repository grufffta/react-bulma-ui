import './breadcrumb.scss';
import { FunctionComponent } from 'react';
import { Position, Size } from '../../props';
interface BreadcrumbOwnProps {
    position?: Position;
    seperator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    size?: Size;
}
export declare const Breadcrumb: FunctionComponent<BreadcrumbOwnProps>;
export {};
