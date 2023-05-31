import { useEffect } from 'react';
import Head from 'next/head';
/*---------- Aos -------------*/
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageBanner from '@/Components/pagebanner/PageBanner';
import Portfolio from '@/Layouts/portfolio/Portfolio';
import ScrollTopButton from '@/Layouts/scrollTopButton/ScrollTopButton';
import { portfolioOurWorkPage } from '@/DataStorge/Datastorge';
import Contact from '@/Layouts/contact/Contact';

export default function service() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bongosoft Ltd. | Contact Page </title>
        {/*--------------------------*/}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <PageBanner txt="contact"/>
       <Contact />
      <ScrollTopButton />
    </>
  )
}
