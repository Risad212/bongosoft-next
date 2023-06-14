import React, { useEffect, useState } from 'react';
import webDesign from '../../Media/service-details/web-design.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';

const web_design = () => {
    const [getInfo, setGetInfo] = useState()
    const serviceInfo = {
        title: 'Web Design',
        img: webDesign,
        disc1: `At Bongosoft, we offer a variety of creative and professional website design. We can help you to build a website that is professional and also looks great. It will meet the needs of both you and your customers.`,
        disc2: `We help you to design a website that allows you to build an online presence. Your goal is vital to us. We always care about your business and also create a perfect custom website for your every need. We can provide you UI/UX design, PSD to HTML, Custom Design, Website with Word Press and many more.`
    }
    useEffect(() => {
        setGetInfo(serviceInfo)
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
        </>
    );
};

export default web_design;