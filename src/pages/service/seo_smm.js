import React, { useEffect, useState } from 'react';
import seo from '../../Media/service-details/seo.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';

const seo_smm = () => {
    const [getInfo, setGetInfo] = useState()
    const serviceInfo = {
        title: 'Digital Marketing',
        img: seo,
        disc1: `Your business is growing but not fast enough. You struggle to find a way to capture every last lead and sale available online. As a result, you feel frustrated and stuck.`,
        disc2: `Our skilled team of digital marketer delivers top class work for our clients. We believe no opportunity should be left on the table. Our vision has been to serve as a powerful extension of your own marketing department.`
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

export default seo_smm;