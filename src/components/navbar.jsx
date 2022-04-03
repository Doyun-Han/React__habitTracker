import React, { memo } from 'react';

const Navbar = memo(({totalCount}) => {
    return (
        <header className="navbar">
            <i className="navbar-logo fa-solid fa-leaf"></i>
            <span className="Head">Habbit Tracker</span>
            <span className="navbar-count">{totalCount}</span>
        </header>
    )
});
export default Navbar;
