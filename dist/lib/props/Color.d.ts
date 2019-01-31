export declare type Color = 'normal' | 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger';
export declare type AdditionalColor = 'white' | 'light' | 'dark' | 'black' | 'text';
export declare type AdditionalColorShade = 'black-bis' | 'black-ter' | 'grey' | 'grey-darker' | 'grey-dark' | 'grey-light' | 'grey-lighter' | 'white-ter' | 'white-bis';
export declare type StandardColor = Color | AdditionalColor;
export declare type ElementColor = Color | AdditionalColor | AdditionalColorShade;
export declare function getColorStyle(color?: StandardColor): {
    [x: string]: boolean;
};
export declare function getTextColorStyle(color?: ElementColor): {
    [x: string]: boolean;
};
export declare function getBackgroundColorStyle(color?: ElementColor): {
    [x: string]: boolean;
};
