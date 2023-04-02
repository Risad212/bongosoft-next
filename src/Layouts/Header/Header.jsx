import React from 'react';
import header from './header.module.css';
import Topbar from '../Topbar/Topbar';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
           <Topbar />
           <Navbar />
        </div>
    );
};

export default Header;