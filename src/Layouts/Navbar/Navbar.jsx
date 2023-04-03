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
                           <ul class={navbar.dlSubmenu}>
                              <li> <a href="software-development.php">	Software Development </a>
                                  <ul class="secondary dl-submenu">
                                      <li> <a href="#"> Point Of Sale </a> </li>
                                      <li> <a href="#"> School Management </a> </li>
                                      <li> <a href="#"> Pharmacy Management </a> </li>
                                      <li> <a href="#"> Super Shop Management </a> </li>
                                      <li> <a href="#"> Restaurant Management </a> </li>
                                      <li> <a href="#"> Custom Software </a> </li>
                                  </ul>
                              </li>
                              <li> <a href="web-design.php"> Web Design </a>
                                  <ul class="secondary dl-submenu">
                                      <li> <a href="#" title=""> PSD to HTML </a> </li>
                                      <li> <a href="#" title=""> UX/UI Design </a> </li>
                                      <li> <a href="#" title=""> Website Template Design </a> </li>
                                      <li> <a href="#" title=""> PSD/HTML to WordPress </a> </li>
                                      <li> <a href="#" title=""> Front End Design </a> </li>
                                      <li> <a href="#" title=""> Email Template </a> </li>
                                  </ul>
                              </li>
                              <li> <a href="web-development.php">	Web Development </a>
                                  <ul class="secondary dl-submenu">
                                      <li> <a href="#"> News Portal development </a> </li>
                                      <li> <a href="#"> Custom CMS development </a> </li>
                                      <li> <a href="#"> E-Commerce Development </a> </li>
                                      <li> <a href="#"> NGO Website Development </a> </li>
                                      <li> <a href="#"> Educational Ins. Website </a> </li>
                                      <li> <a href="#"> WordPress Development</a> </li>
                                  </ul>
                              </li>
                              <li> <a href="graphics-design.php">	Graphics Design </a>
                                  <ul class="secondary dl-submenu">
                                      <li> <a href="#"> Logo Design </a> </li>
                                      <li> <a href="#"> Flyer &amp; Brochure Design </a> </li>
                                      <li> <a href="#"> Corporate Branding </a> </li>
                                      <li> <a href="#"> PSD Template Design </a> </li>
                                      <li> <a href="#"> Web &amp; Social Media Ad. </a> </li>
                                      <li> <a href="#"> Prient Media Design </a> </li>
                                  </ul>
                              </li>
                              <li> <a href="seo-smm.php">	Digital Marketing </a>
                                  <ul class="secondary dl-submenu">
                                      <li><a href="#"> Social Media Ad. Campaign </a></li>
                                      <li><a href="#"> Onsite SEO Service </a></li>
                                      <li><a href="#"> Website Ranking Service </a></li>
                                      <li><a href="#"> E-Commerce SEO Solution </a></li>
                                      <li><a href="#"> Corporate SEO Service </a></li>
                                      <li><a href="#"> Local SEO Service</a></li>
                                  </ul>
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