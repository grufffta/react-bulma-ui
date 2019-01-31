import './button.scss';
import { FunctionComponent } from 'react';
import { ButtonCommonProps } from './ButtonCommon';
interface LinkButtonOwnProps extends ButtonCommonProps {
    /** display loading indicator */
    loading?: boolean;
}
/** button using html anchor element */
export declare const LinkButton: FunctionComponent<LinkButtonOwnProps>;
export {};
