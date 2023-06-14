import React, { useEffect, useState } from 'react';
import softo from '../../Media/service-details/software-development.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';

const softoware_development = () => {
    const [getInfo, setGetInfo] = useState()
    const serviceInfo = {
        title: 'Software Development',
        img: softo,
        disc1: `Your business needs software for supporting your operations. It requires for scaling and coordinating with all operation department. Bongosoft Ltd. has the experience, tools, and technologies to create such demanding software. You will find some software that we are developing.`,
        disc2: `We are using asp.net, PHP, Java, Node.js, latest java framework for developing our software. Your need will always get priority from our end. We provide you the best solution in the market. Bongosoft Ltd. has the experience, tools, and technologies to create such demanding software. You will find some software that we are developing.`
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

export default softoware_development;