import React, { useState } from 'react';
import Paralax from '../Paralax/Paralax';
import MainFooter from '../MainFooter/MainFooter';
import FooterBottom from '../FooterBottom/FooterBottom';
import FooterList from '../FooterList/FooterList';
import footer from './footer.module.css'
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    let toggle = router.route.startsWith('/blog');
    
    return (
        <>
            <div className={footer.main}>
                {toggle !== true? <Paralax />: ''}
                {toggle !== true? <MainFooter />: ''}
                <FooterList />
            </div>
            <FooterBottom />
        </>
    );
};

export default Footer;