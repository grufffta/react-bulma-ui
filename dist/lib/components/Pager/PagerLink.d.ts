import { FunctionComponent } from 'react';
interface PagerLinkOwnProps {
    page: number;
    current?: number;
    onClick: (page: number) => void;
}
export declare const PagerLink: FunctionComponent<PagerLinkOwnProps>;
export {};
