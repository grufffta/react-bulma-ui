import './modal.scss';
import { FunctionComponent } from 'react';
interface ModalOwnProps {
    visible?: boolean;
    onClose: () => void;
}
export declare const Modal: FunctionComponent<ModalOwnProps>;
export {};
