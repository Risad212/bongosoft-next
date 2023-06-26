import React from 'react';
import Paralax from '../Paralax/Paralax';
import MainFooter from '../MainFooter/MainFooter';
import FooterBottom from '../FooterBottom/FooterBottom';
import FooterList from '../FooterList/FooterList';
import footer from './footer.module.css'
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    console.log(router.route);
    return (
        <>
            <div className={footer.main}>
                {router?.route !== '/blog'? <Paralax />: ''}
                {router?.route !== '/blog'? <MainFooter />: ''}
                <FooterList />
            </div>
            <FooterBottom />
        </>
    );
};

export default Footer;