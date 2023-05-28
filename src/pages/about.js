import { useEffect } from 'react';
import Head from 'next/head';
/*---------- Aos -------------*/
import PageBanner from '@/Components/pagebanner/PageBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chooseus from '@/Layouts/chooseus/Chooseus';
import Ourskills from '@/Layouts/outskill/Ourskills';
import Testimonial from '@/Layouts/Testimonial/Testimonial';
import Client from '@/Layouts/Client/Client';



export default function Home() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bongosoft Ltd. | Software Company in Bangladesh </title>
        <meta name="description" content="Bongosoft is a leading web design company in Bangladesh. We are also a digital marketing agency in Bangladesh providing not only website design &amp; development, seo service but also graphic designing, content marketing, making online Bangla newspaper and effective social media marketing all over Bangladesh and many more." />
        {/*--------------------------*/}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <PageBanner txt="about us"/>
      <Chooseus />
      <Ourskills />
       <Client />
      <Testimonial />
    </>
  )
}
