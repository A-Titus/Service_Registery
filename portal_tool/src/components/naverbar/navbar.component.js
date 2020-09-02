import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

const NavbarAll = () => (
    <div className='navbar1'>
        <div className='logo'>
            <Link className='add' to='/'>
                Portal-Tool
            </Link>
        </div>
        <div className='portal'>
            <Link className='sample1' to='/tool'>
                Categories and API's
            </Link>
        </div>
    </div>
)

export default NavbarAll;