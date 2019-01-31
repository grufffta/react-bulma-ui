export interface LinkOwnProps {
    /** is the link disabled */
    disabled?: boolean;
    /** is the link active */
    active?: boolean;
    /** link href location */
    href?: string;
    /** link on click event */
    onClick?: () => void;
}
