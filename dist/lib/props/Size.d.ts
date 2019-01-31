export declare type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type Size = 'small' | 'default' | 'normal' | 'medium' | 'large';
export declare type TextSize = 1 | 2 | 3 | 4 | 5 | 6;
export declare function getSizeStyle(size?: Size): {
    [x: string]: boolean;
};
