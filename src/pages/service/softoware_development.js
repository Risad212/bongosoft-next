import React, { useEffect, useState } from 'react';
import softo from '../../Media/service-details/software-development.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';
import ServiceList from '@/Components/servicelist/ServiceList';
/*------ service list images --------------*/
import soft1 from '../../Media/service-details/softoware/pos-software.jpg';
import soft2 from '../../Media/service-details/softoware/school-management.jpg';
import soft3 from '../../Media/service-details/softoware/pharmacy-management.jpg';
import soft4 from '../../Media/service-details/softoware/super-shop-sanagement.jpg';
import soft5 from '../../Media/service-details/softoware/resturent-management.jpg';
import soft6 from '../../Media/service-details/softoware/custom-software.jpg';



const softoware_development = () => {
    const [getInfo, setGetInfo] = useState()
    const [serviceData, setServiceData] = useState()
    const serviceInfo = {
        title: 'Software Development',
        img: softo,
        disc1: `Your business needs software for supporting your operations. It requires for scaling and coordinating with all operation department. Bongosoft Ltd. has the experience, tools, and technologies to create such demanding software. You will find some software that we are developing.`,
        disc2: `We are using asp.net, PHP, Java, Node.js, latest java framework for developing our software. Your need will always get priority from our end. We provide you the best solution in the market. Bongosoft Ltd. has the experience, tools, and technologies to create such demanding software. You will find some software that we are developing.`
    }
    const serviceList = [
        {
            title: 'Point Of Sale',
            disc: `Track your customers' history, your inventory, calculate daily sales, and print receipt. You get instant feedback to improve your service.`,
            img: soft1,
            animation: {
               name: 'fade-right',
               delay: '1000',
               duration: '400'
            }
        },
        {
            title: 'School Management',
            disc: `School Management software is an essential part for any educational institute. School authorities can manage attendance, functions ...`,
            img: soft2,
            animation: {
                name: 'fade-up',
                delay: '500',
                duration: '400'
             }
        },
        {
            title: 'Pharmacy Management',
            disc: `Our pharmacy management System offers many features that make our processes easier, such as running dual or multiple inventories.`,
            img: soft3,
            animation: {
                name: 'fade-left',
                delay: '1200',
                duration: '400'
             }
        },
        {
            title: 'Super Shop Management',
            disc: `Super shop management software can manage your work easily with inventory management, daily sales, profit, and other.`,
            img: soft4,
            animation: {
                name: 'fade-right',
                delay: '1000',
                duration: '400'
             }
        },
        {
            title: 'Restaurant Management',
            disc: `You can efficiently manage your restaurant with this specialized software. You can manage booking, events, sales, inventory within a click.`,
            img: soft5,
            animation: {
                name: 'fade-up',
                delay: '500',
                duration: '400'
             }
        },
        {
            title: 'Custom Software',
            disc: `We offer custom software development and consulting services to help you pull off your next project with less stress and less cost.`,
            img: soft6,
            animation: {
                name: 'fade-left',
                delay: '1200',
                duration: '400'
             }
        },
    ]
    useEffect(() => {
        setGetInfo(serviceInfo);
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
            <ServiceList data={serviceData} title="Software Development "/>
        </>
    );
};

export default softoware_development;