import React from 'react';
import Paralax from '../Paralax/Paralax';
import MainFooter from '../MainFooter/MainFooter';
import FooterBottom from '../FooterBottom/FooterBottom';
import FooterList from '../FooterList/FooterList';
import footer from './footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={footer.main}>
                <Paralax />
                <MainFooter />
                <FooterList />
            </div>
            <FooterBottom />
        </>
    );
};

export default Footer;