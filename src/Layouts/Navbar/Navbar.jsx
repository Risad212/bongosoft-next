import React, { useEffect, useState } from 'react';
import navbar from './navbar.module.css';
import Logo from '../../Media/logo.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';


const Navbar = () => {
   const [navIcon,setNavIcon] = useState(false)
   const [showMenu, setShowMenu] = useState(false)
   const [scrolled, setScrolled] = useState(false);

   const toggleNav = () => {
    setNavIcon(!navIcon)
    setShowMenu(!showMenu)
   }
   
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 5) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    },[])

    const router = useRouter();
    const currentRoute = router.pathname;
   return (
      <>
         <div className={navbar.navWrapper} style={scrolled? {position: 'fixed', top: 0, transition: 'position 5s ease-in-out'}: {transition: 'position 5s ease-in-out'}}>
            <div className="container">
               <nav>
                  {/*----- LOGO ------*/}
                  <div className={navbar.logo}>
                     <a href="#"><Image src={Logo} alt="" /></a>
                  </div>
                  <div className={`${navbar.menuWrapper} ${showMenu? navbar.showMenu: ''}`}>
                     <ul className={navbar.list}>
                        <li><a href="/" className={currentRoute === '/' ? navbar.active : navbar.nonActive}>Home</a></li>
                        <li><a href="/about" className={currentRoute === '/about' ? navbar.active : navbar.nonActive}>About</a></li>
                        <li className={navbar.dropdown}>
                           <a href="/service" className={currentRoute === '/service' ? navbar.active : navbar.nonActive}>Services</a>
                           <ul className={navbar.dlSubmenu}>
                              <li className={navbar.firsDrop}>
                                 <a href="#">Software Development </a>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <a href="#"> Point Of Sale </a> </li>
                                    <li> <a href="#"> School Management </a> </li>
                                    <li> <a href="#"> Pharmacy Management </a> </li>
                                    <li> <a href="#"> Super Shop Management </a> </li>
                                    <li> <a href="#"> Restaurant Management </a> </li>
                                    <li> <a href="#"> Custom Software </a> </li>
                                 </ul>
                              </li>
                              <li className={navbar.secondDrop}>
                                 <a href="web-design.php">Web Design</a>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <a href="#" title=""> PSD to HTML </a> </li>
                                    <li> <a href="#" title=""> UX/UI Design </a> </li>
                                    <li> <a href="#" title=""> Website Template Design </a> </li>
                                    <li> <a href="#" title=""> PSD/HTML to WordPress </a> </li>
                                    <li> <a href="#" title=""> Front End Design </a> </li>
                                    <li> <a href="#" title=""> Email Template </a> </li>
                                 </ul>
                              </li>
                              <li className={navbar.thirtDrop}>
                                 <a href="web-development.php">Web Development</a>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <a href="#"> News Portal development </a> </li>
                                    <li> <a href="#"> Custom CMS development </a> </li>
                                    <li> <a href="#"> E-Commerce Development </a> </li>
                                    <li> <a href="#"> NGO Website Development </a> </li>
                                    <li> <a href="#"> Educational Ins. Website </a> </li>
                                    <li> <a href="#"> WordPress Development</a> </li>
                                 </ul>
                              </li>
                              <li className={navbar.fourDrop}>
                                 <a href="graphics-design.php">Graphics Design </a>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <a href="#"> Logo Design </a> </li>
                                    <li> <a href="#"> Flyer &amp; Brochure Design </a> </li>
                                    <li> <a href="#"> Corporate Branding </a> </li>
                                    <li> <a href="#"> PSD Template Design </a> </li>
                                    <li> <a href="#"> Web &amp; Social Media Ad. </a> </li>
                                    <li> <a href="#"> Prient Media Design </a> </li>
                                 </ul>
                              </li>
                              <li className={navbar.fifthDrop}>
                                 <a href="seo-smm.php">Digital Marketing </a>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
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
                        <li><a href="/ourwork" className={currentRoute === '/ourwork' ? navbar.active : navbar.nonActive}>our work</a></li>
                        <li><a href="/blog" className={currentRoute === '/blog' ? navbar.active : navbar.nonActive}>blog</a></li>
                        <li><a href="/contact" className={currentRoute === '/contact' ? navbar.active : navbar.nonActive}>contact</a></li>
                        <li><div className={navbar.searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></div></li>
                     </ul>
                  </div>
                  <FontAwesomeIcon icon={navIcon? faXmark: faBars} className={navbar.menuIcon} onClick={(e) => toggleNav()}/>
               </nav>
            </div>
         </div>
      </>
   );
};

export default Navbar;