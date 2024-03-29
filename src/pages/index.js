import { useEffect } from 'react'
/*---------- Aos -------------*/
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurWork from '@/Layouts/outowork/OurWork'
import Slider from '../Layouts/Slider/Slider'
import Head from 'next/head'
import About from '@/Layouts/about/About'
import Counter from '@/Layouts/counter/Counter'
import Service from '@/Layouts/service/Service'
import Testimonial from '@/Layouts/Testimonial/Testimonial'
import Portfolio from '@/Layouts/portfolio/Portfolio'
import ScrollTopButton from '@/Layouts/scrollTopButton/ScrollTopButton'
/*----- import data -------*/
import {portfolioHomePage} from '../DataStorge/Datastorge';
export const dynamic = 'force-static'

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
      <Slider />
      <OurWork />
      <About />
      <Counter />
      <Service />
      <Portfolio data={portfolioHomePage} title="Portfolio" btntxt="view all"/>
      <Testimonial />
      <ScrollTopButton />
    </>
  )
}
