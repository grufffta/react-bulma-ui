import './hero.scss';
import { FunctionComponent } from "react";
import { StandardColor, Size } from "../../../props";
interface HeroOwnProps {
    title: string;
    subtitle?: string;
    color?: StandardColor;
    size?: Size;
    fullheight?: boolean | 'fullheight-with-navbar';
    gradient?: boolean;
    header?: JSX.Element;
    footer?: JSX.Element;
    tile?: boolean;
}
export declare const Hero: FunctionComponent<HeroOwnProps>;
export {};
