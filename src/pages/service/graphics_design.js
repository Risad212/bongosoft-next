import React, { useEffect, useState } from 'react';
import graphics from '../../Media/service-details/graphic-design.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';
import ServiceList from '@/Components/servicelist/ServiceList';
/*------ service list images --------------*/
import img1 from '../../Media/service-details/graphics-design/logo-design.jpg';
import img2 from '../../Media/service-details/graphics-design/flyer-and-brochure-design.jpg';
import img3 from '../../Media/service-details/graphics-design/corporate-branding.jpg';
import img4 from '../../Media/service-details/graphics-design/psd-template-design.jpg';
import img5 from '../../Media/service-details/graphics-design/banner.jpg';
import img6 from '../../Media/service-details/graphics-design/print-media-design.jpg';


const graphics_design = () => {
    const [getInfo, setGetInfo] = useState()
    const [serviceData, setServiceData] = useState()
    const serviceInfo = {
        title: 'Graphics Design',
        img: graphics,
        disc1: `We love working with entrepreneurs, start-ups and big company with our professional graphics skill. We create custom logo designs, brand identity, Flyer & Brochure, PSD Templates, print media design and also user-friendly display ads.`,
        disc2: `It’s a competitive world out there, and making the first impression is vital to communicating your objectives and relationships with prospective clients. Our entire mission is to make your business look great.`
    }
    const serviceList = [
        {
            title: 'Social Media Ad. Campaign',
            disc: `We use social media data to track basic user information and set up our ads campaign on Facebook, Twitter, Instagram, LinkedIn, and YouTube for the data-driven result.`,
            img: img1,
            animation: {
                name: 'fade-right',
                delay: '1000',
                duration: '400'
             }
        },
        {
            title: 'Onsite SEO Service',
            disc: `On the page, optimization not only increases the readability of your website but also get a better rank in the search engines. We provide the best on-site SEO service.
            `,
            img: img2,
            animation: {
                name: 'fade-up',
                delay: '500',
                duration: '400'
             }
        },
        {
            title: 'Website Ranking Service',
            disc: `We provide businesses with a service that delivers top-notch results. Our goals include helping companies achieve long term results and stand above the competition.`,
            img: img3,
            animation: {
                name: 'fade-left',
                delay: '1200',
                duration: '400'
             }
        },
        {
            title: 'E-Commerce SEO Solution',
            disc: `Our SEO expert makes innovative SEO strategies for eCommerce that drive traffic, increase sales, and produce positive ROI, No matter which platform you use.`,
            img: img4,
            animation: {
                name: 'fade-right',
                delay: '1000',
                duration: '400'
             }
        },
        {
            title: 'Corporate SEO Service',
            disc: `Large organizations with large websites usually require enterprise SEO services. Our cutting-edge, targeted solutions help you attract the right customers and grow your business.`,
            img: img5,
            animation: {
                name: 'fade-up',
                delay: '500',
                duration: '400'
             }
        },
        {
            title: 'Local SEO Service',
            disc: `Are you struggling to get the calls or leads that you need for your business? Partner with Bongosoft, we have proven track record of delivering more of what you want!
            `,
            img: img6,
            animation: {
                name: 'fade-left',
                delay: '1200',
                duration: '400'
             }
        },
    ]
    useEffect(() => {
        setGetInfo(serviceInfo)
        setServiceData(serviceList)
    },[])
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Bongosoft Ltd. | Services</title>
            </Head>
            <ServiceDetails info={getInfo}/> 
            <ServiceList data={serviceData} title="Graphics Design"/>   
        </>
    );
};

export default graphics_design;