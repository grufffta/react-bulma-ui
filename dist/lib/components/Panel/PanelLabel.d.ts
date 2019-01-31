import { FunctionComponent } from 'react';
interface PanelLabelOwnProps {
    text?: string;
    checkbox?: boolean;
    onCheckboxChanged?: () => void;
}
export declare const PanelLabel: FunctionComponent<PanelLabelOwnProps>;
export {};
