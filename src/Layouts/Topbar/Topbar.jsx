import React from 'react';
import topbar from './topbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Topbar = () => {
    return (
        <>
            <div className={topbar.background}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className={topbar.wraperTopLeft}>
                                <div className={topbar.topTextLeft}>
                                    <Link href="/" className={topbar.textWhite}><FontAwesomeIcon icon={faPhone} /> +8801911-115231 </Link>
                                    <Link href="/" className={topbar.textWhite}><FontAwesomeIcon icon={faEnvelope} /> info@bongosoftbd.com </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className={topbar.wraperTopRight}>
                                <div className={topbar.topListStyle}>
                                    <Link href="/" className={topbar.textWhite}> Login </Link>
                                    <Link href="/" className={topbar.textWhite}> Register </Link>
                                </div>
                                <ul className={topbar.socialIcon}>
                                    <li><Link href="/" className={topbar.facebook}><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                    <li><Link href="/" className={topbar.twitter}><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                    <li><Link href="/" className={topbar.youtube}><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                    <li><Link href="/" className={topbar.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                    <li><Link href="/" className={topbar.pintarest}><FontAwesomeIcon icon={faPinterestP} /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;