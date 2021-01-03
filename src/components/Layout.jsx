import React from 'react';
import { Link } from 'react-router-dom';
import emprenti from '../images/Logo-Emprenti-pequeño.jpg';
import '../styles/header.css';

const Layout = () => {
    return (
        <header>
            <img className='emprenti' src={emprenti} alt='emprenti' />
            <ul>
                <li><Link to='/text'>text</Link></li>
                <li><Link to='/text/form'>form</Link></li>
            </ul>
        </header>
    );
}

export default Layout;