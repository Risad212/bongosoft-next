import React, { useEffect, useState } from 'react';
import graphics from '../../Media/service-details/graphic-design.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';

const graphics_design = () => {
    const [getInfo, setGetInfo] = useState()
    const serviceInfo = {
        title: 'Graphics Design',
        img: graphics,
        disc1: `We love working with entrepreneurs, start-ups and big company with our professional graphics skill. We create custom logo designs, brand identity, Flyer & Brochure, PSD Templates, print media design and also user-friendly display ads.`,
        disc2: `It’s a competitive world out there, and making the first impression is vital to communicating your objectives and relationships with prospective clients. Our entire mission is to make your business look great.`
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

export default graphics_design;