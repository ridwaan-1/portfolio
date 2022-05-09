import React, { useState } from 'react';
import Icons from '../icons/Icons';
import './Header.css';

const Header = (props) => {

    return ( 
        <header className='navbar'>
            <h1 className='navbar-title gradient__text'>PORTFOLIO</h1>

            <Icons />
        </header>
    );
}
 
export default Header;