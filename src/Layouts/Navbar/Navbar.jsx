import React from 'react';
import navbar from './navbar.module.css';
import Logo from '../../Media/logo.png'
import Image from 'next/image';


const Navbar = () => {
    return (
        <>
          <div className={navbar.navWrapper}>
             <div className="container">
                {/*----- LOGO ------*/}
                 <div className={navbar.logo}>
                    <a href="#"><Image src={Logo} alt="" /></a>
                 </div>
                 <div className={navbar.menuWrapper}>
                     <ul>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Home</li>
                     </ul>
                 </div>
             </div>
          </div>
        </>
    );
};

export default Navbar;