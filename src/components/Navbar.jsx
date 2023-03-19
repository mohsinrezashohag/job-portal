import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Link to="/">

            <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
                <h1 className='logo'>Job Box</h1>
            </nav>

        </Link>


    );
};

export default Navbar;