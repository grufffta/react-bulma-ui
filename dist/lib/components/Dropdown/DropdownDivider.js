import React from 'react';
export var DropdownDivider = function (_a) {
    var navbar = _a.navbar;
    return React.createElement("hr", { className: navbar ? 'navbar-divider' : 'dropdown-divider' });
};
