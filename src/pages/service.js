import { useEffect } from 'react';
import Head from 'next/head';
/*---------- Aos -------------*/
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageBanner from '@/Components/pagebanner/PageBanner';
import Servicetext from '@/Layouts/servicetext/Servicetext';
import Ourservice from '@/Layouts/ourservice/Ourservice';
import ScrollTopButton from '@/Layouts/scrollTopButton/ScrollTopButton';


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
        <title>Bongosoft Ltd. | Services </title>
        {/*--------------------------*/}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <PageBanner txt="services"/>
      <Servicetext />
      <Ourservice />
      <ScrollTopButton />
    </>
  )
}
