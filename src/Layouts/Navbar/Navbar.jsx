import React, { useEffect, useState } from 'react';
import navbar from './navbar.module.css';
import Logo from '../../Media/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass,faXmark } from '@fortawesome/free-solid-svg-icons';
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
                     <Link href="#"><Image src={Logo} alt="" /></Link>
                  </div>
                  <div className={`${navbar.menuWrapper} ${showMenu? navbar.showMenu: ''}`}>
                     <ul className={navbar.list}>
                        <li><Link href="/" className={currentRoute === '/' ? navbar.active : navbar.nonActive}>Home</Link></li>
                        <li><Link href="/about" className={currentRoute === '/about' ? navbar.active : navbar.nonActive}>About</Link></li>
                        <li className={navbar.dropdown}>
                           <Link href="/service" className={currentRoute === '/service' ? navbar.active : navbar.nonActive}>Services</Link>
                           <ul className={navbar.dlSubmenu}>
                              <li className={navbar.firsDrop}>
                                 <Link href="/service/softoware_development">Software Development </Link>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <Link href="#"> Point Of Sale </Link> </li>
                                    <li> <Link href="#"> School Management </Link> </li>
                                    <li> <Link href="#"> Pharmacy Management </Link> </li>
                                    <li> <Link href="#"> Super Shop Management </Link> </li>
                                    <li> <Link href="#"> Restaurant Management </Link> </li>
                                    <li> <Link href="#"> Custom Software </Link> </li>
                                 </ul>
                              </li>
                              <li className={navbar.secondDrop}>
                                 <Link href="/service/web_design">Web Design</Link>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <Link href="#" title=""> PSD to HTML </Link> </li>
                                    <li> <Link href="#" title=""> UX/UI Design </Link> </li>
                                    <li> <Link href="#" title=""> Website Template Design </Link> </li>
                                    <li> <Link href="#" title=""> PSD/HTML to WordPress </Link> </li>
                                    <li> <Link href="#" title=""> Front End Design </Link> </li>
                                    <li> <Link href="#" title=""> Email Template </Link> </li>
                                 </ul>
                              </li>
                              <li className={navbar.thirtDrop}>
                                 <Link href="/service/web_development">Web Development</Link>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <Link href="#"> News Portal development </Link> </li>
                                    <li> <Link href="#"> Custom CMS development </Link> </li>
                                    <li> <Link href="#"> E-Commerce Development </Link> </li>
                                    <li> <Link href="#"> NGO Website Development </Link> </li>
                                    <li> <Link href="#"> Educational Ins. Website </Link> </li>
                                    <li> <Link href="#"> WordPress Development</Link> </li>
                                 </ul>
                              </li>
                              <li className={navbar.fourDrop}>
                                 <Link href="/service/graphics_design">Graphics Design </Link>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                    <li> <Link href="#"> Logo Design </Link> </li>
                                    <li> <Link href="#"> Flyer &amp; Brochure Design </Link> </li>
                                    <li> <Link href="#"> Corporate Branding </Link> </li>
                                    <li> <Link href="#"> PSD Template Design </Link> </li>
                                    <li> <Link href="#"> Web &amp; Social Media Ad. </Link> </li>
                                    <li> <Link href="#"> Prient Media Design </Link> </li>
                                 </ul>
                              </li>
                              <li className={navbar.fifthDrop}>
                                 <Link href="/service/seo_smm">Digital Marketing </Link>
                                 <ul id={navbar.secondary} className={navbar.dlSubmenu}>
                                      <li><Link href="#"> Social Media Ad. Campaign </Link></li>
                                      <li><Link href="#"> Onsite SEO Service </Link></li>
                                      <li><Link href="#"> Website Ranking Service </Link></li>
                                      <li><Link href="#"> E-Commerce SEO Solution </Link></li>
                                      <li><Link href="#"> Corporate SEO Service </Link></li>
                                      <li><Link href="#"> Local SEO Service</Link></li>
                                  </ul>
                              </li>
                              <li> <Link href="#"> Domain &amp; Hosting </Link> </li>
                           </ul>
                        </li>
                        <li><Link href="/ourwork" className={currentRoute === '/ourwork' ? navbar.active : navbar.nonActive}>our work</Link></li>
                        <li><Link href="/blog" className={currentRoute === '/blog' ? navbar.active : navbar.nonActive}>blog</Link></li>
                        <li><Link href="/contact" className={currentRoute === '/contact' ? navbar.active : navbar.nonActive}>contact</Link></li>
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