import React, { useEffect, useState } from 'react';
import webDev from '../../Media/service-details/web-development.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';
import ServiceList from '@/Components/servicelist/ServiceList';
/*------ service list images --------------*/
import img1 from '../../Media/service-details/web-dev/news-portal.jpg';
import img2 from '../../Media/service-details/web-dev/custom-cms.jpg';
import img3 from '../../Media/service-details/web-dev/educational.jpg';
import img4 from '../../Media/service-details/web-dev/e-commerce.jpg';
import img5 from '../../Media/service-details/web-dev/ngo-website.jpg';
import img6 from '../../Media/service-details/web-dev/wordpress.jpg';


const web_development = () => {
    const [getInfo, setGetInfo] = useState()
    const [serviceData, setServiceData] = useState()
    const serviceInfo = {
        title: 'Web Development',
        img: webDev,
        disc1: `You can rely on Bongosoft for your any kind website development. We have over seven years’ experience in website development. In this period we developed over 100+ websites in different sectors.`,
        disc2: `You can rely on Bongosoft for your any kind website development. We have over seven years’ experience in website development. In this period we developed over 100+ websites in different sectors.`
    }
    const serviceList = [
        {
            title: 'News Portal Development',
            disc: `Enhance your news portal Performance and look of your News Portal. Go beyond from the traditional boundary and get SEO optimize portal for mobile and web.`,
            img: img1,
            animation: {
                name: 'fade-right',
                delay: '1000',
                duration: '400'
             }
        },
        {
            title: 'Custom CMS Development',
            disc: `Custom CMS means the fully functional website with full security. It will give benefit you the entire ownership cutting edge custom CMS technology.
            `,
            img: img2,
            animation: {
                name: 'fade-up',
                delay: '500',
                duration: '400'
             }
        },
        {
            title: 'Educational Ins. Website',
            disc: `We design different websites for School, College, Madrasah, University or other educational sites. We build it with the latest technology, easy maintenance.`,
            img: img3,
            animation: {
                name: 'fade-left',
                delay: '1200',
                duration: '400'
             }
        },
        {
            title: 'E-Commerce Development',
            disc: `ECommerce development has indeed become a necessity instead of a means to drive higher traffic. We can develop your eCommerce with Magento, Shopify, Open Cart, Wordpress and Custom.`,
            img: img4,
            animation: {
                name: 'fade-right',
                delay: '1000',
                duration: '400'
             }
        },
        {
            title: 'NGO Website Development',
            disc: `We built a very high-quality Website for NGO. Our NGO Website Design provides Admin Panel, Member Login, Articles, Newsletter, Events & Publication Management and Ask Question features.`,
            img: img5,
            animation: {
                name: 'fade-up',
                delay: '500',
                duration: '400'
             }
        },
        {
            title: 'WordPress Development',
            disc: `Bongosoft delivers robust, scalable and high-performance WordPress development services to help you harness the power of technology, consulting and maximize your online business investment.`,
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
            <ServiceList data={serviceData} title="Web Development"/>
        </>
    );
};

export default web_development;