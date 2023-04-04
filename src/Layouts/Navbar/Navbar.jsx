import React from 'react';
import navbar from './navbar.module.css';
import Logo from '../../Media/logo.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <>
          <div className={navbar.navWrapper}>
             <div className="container">
                <nav>
                {/*----- LOGO ------*/}
                 <div className={navbar.logo}>
                    <a href="#"><Image src={Logo} alt="" /></a>
                 </div>
                 <div className={navbar.menuWrapper}>
                     <ul className={navbar.list}>
                        <li><a href="#" className={navbar.active}>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li className={navbar.dropdown}>
                           <a href="#">Services</a>
                           <ul className={navbar.dlSubmenu}>
                              <li> <a href="software-development.php">	Software Development </a>
                              </li>
                              <li> <a href="web-design.php"> Web Design </a>
                              </li>
                              <li> <a href="web-development.php">	Web Development </a>
                              </li>
                              <li> <a href="graphics-design.php">	Graphics Design </a>
                              </li>
                              <li> <a href="seo-smm.php">	Digital Marketing </a>
                              </li>
                              <li> <a href="#"> Domain &amp; Hosting </a> </li>
                          </ul>
                        </li>
                        <li><a href="#">our work</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact</a></li>
                     </ul>
                     <div className={navbar.searchBtn}>
                        <FontAwesomeIcon icon={faSearch}/>
                     </div>
                    </div>
                 </nav>
             </div>
          </div>
        </>
    );
};

export default Navbar;