export declare type Position = 'left' | 'centered' | 'right';
export declare type VerticalAlignment = 'top' | 'center' | 'bottom';
export declare function getPositionStyle(position?: Position): {
    [x: string]: boolean;
};
