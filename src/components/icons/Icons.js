import React from 'react';

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
const Icons = () => {
    return ( 
        <ul className='navbar-listIcons'>
            <li>
                <a className='navbar-icon' href="https://github.com/ridwaan-1" target="_blank"><AiFillGithub /></a>
            </li>
            <li>
                <a className='navbar-icon' href="https://twitter.com/Ridwaan__12" target="_blank"><AiFillTwitterCircle /></a>
            </li>
            <li>
                <a className='navbar-icon' href="www.linkedin.com/in/ridwaan-ibrahim-730348238" target="_blank"><AiFillLinkedin /></a>
            </li>
        </ul>
    );
}
 
export default Icons;