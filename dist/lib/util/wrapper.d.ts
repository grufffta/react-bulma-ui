import { ReactNode, ReactChildren } from 'react';
export declare function wrap(e: React.ReactNode, wrapfunc: (element: React.ReactNode) => JSX.Element): JSX.Element | JSX.Element[];
export declare function addClass(node: ReactNode | ReactChildren, className: string): JSX.Element | JSX.Element[];
export declare function addClassToElement(element: JSX.Element, className: string): {
    props: any;
    type: any;
    key: string | number | null;
};
