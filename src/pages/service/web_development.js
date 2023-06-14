import React, { useEffect, useState } from 'react';
import webDev from '../../Media/service-details/web-development.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';

const web_development = () => {
    const [getInfo, setGetInfo] = useState()
    const serviceInfo = {
        title: 'Web Development',
        img: webDev,
        disc1: `You can rely on Bongosoft for your any kind website development. We have over seven years’ experience in website development. In this period we developed over 100+ websites in different sectors.`,
        disc2: `You can rely on Bongosoft for your any kind website development. We have over seven years’ experience in website development. In this period we developed over 100+ websites in different sectors.`
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

export default web_development;