import './container.scss';
import { FunctionComponent } from 'react';
interface ContainerOwnProps {
    fluid?: boolean;
    breakpoint?: 'widescreen' | 'fullhd';
    tile?: boolean;
}
export declare const Container: FunctionComponent<ContainerOwnProps>;
export {};
