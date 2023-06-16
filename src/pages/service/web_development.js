import React, { useEffect, useState } from 'react';
import webDev from '../../Media/service-details/web-development.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';
import ServiceList from '@/Components/servicelist/ServiceList';
/*------ service list images --------------*/
import webdev1 from '../../Media/service-details/web-design/psd-to-html.jpg';
import webdev2 from '../../Media/service-details/web-design/ux-ui-design.jpg';
import webdev3 from '../../Media/service-details/web-design/template-design.jpg';
import webdev4 from '../../Media/service-details/web-design/psd-to-wordpress.jpg';
import webdev5 from '../../Media/service-details/web-design/front-end-design.jpg';
import webdev6 from '../../Media/service-details/web-design/email-template-design.jpg';


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
            title: 'PSD To HTML',
            disc: `We are prominent for our creativity, quality, and attractive design. Our professional team provide you perfect valid coding and also on time delivery.`,
            img: web1,
        },
        {
            title: 'UI/UX Design',
            disc: `Key to the more sale & higher user adoption rate is an excellent UI/UX and makes more ROI. We can help with excellent UI/UX and bring more business.`,
            img: web2,
        },
        {
            title: 'Web Template Design',
            disc: `Reflect your thinking with our design. We provide template design service for the USA, Canada, UK, and Asian countries. Our Template is responsive, seo friendly and easy to use.`,
            img: web3,
        },
        {
            title: 'PSD/HTML To Word Press',
            disc: `We convert your PSD/HTML template into Word Press. With experience and our skills, we can convert it into a fully functional WordPress theme at any level.`,
            img: web4,
        },
        {
            title: 'Front End Design',
            disc: `Our front-end development toolkit is powered up with the latest technologies, and we are always open to adopting new trends, which can bring better results for your product.`,
            img: web5,
        },
        {
            title: 'Email Template Design',
            disc: `We build e-mail templates for your customer. Our templates are engaging, attractive and responsive. You will maximize engagement rate with our top class e-mail template design`,
            img: web6,
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