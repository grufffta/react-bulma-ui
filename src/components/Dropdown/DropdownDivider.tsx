import React, { FunctionComponent } from 'react'

interface DropdownDividerOwnProps {
  navbar?: boolean
}
export const DropdownDivider: FunctionComponent<DropdownDividerOwnProps> = ({ navbar }) => <hr className={navbar ? 'navbar-divider' : 'dropdown-divider'} />