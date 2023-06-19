import React, { useEffect, useState } from 'react';
import seo from '../../Media/service-details/seo.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';
import ServiceList from '@/Components/servicelist/ServiceList';
/*------ service list images --------------*/
import img1 from '../../Media/service-details/digital/social-media-ad-campaign.jpg';
import img2 from '../../Media/service-details/digital/onesite-seo.jpg';
import img3 from '../../Media/service-details/digital/website-ranking-service.jpg';
import img4 from '../../Media/service-details/digital/e-commerce-seo.jpg';
import img5 from '../../Media/service-details/digital/corporate-seo-service.jpg';
import img6 from '../../Media/service-details/digital/local-seo.jpg';


const graphics_design = () => {
    const [getInfo, setGetInfo] = useState()
    const [serviceData, setServiceData] = useState()
    const serviceInfo = {
        title: 'Digital Marketing',
        img: seo,
        disc1: `Your business is growing but not fast enough. You struggle to find a way to capture every last lead and sale available online. As a result, you feel frustrated and stuck.`,
        disc2: `Our skilled team of digital marketer delivers top class work for our clients. We believe no opportunity should be left on the table. Our vision has been to serve as a powerful extension of your own marketing department.`
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
            <ServiceList data={serviceData} title="Digital Marketing"/>   
        </>
    );
};

export default graphics_design;