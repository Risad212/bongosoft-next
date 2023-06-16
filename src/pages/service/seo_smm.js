import React, { useEffect, useState } from 'react';
import seo from '../../Media/service-details/seo.jpg';
import ServiceDetails from '@/Components/servicedetails/ServiceDetails';
import Head from 'next/head';
import ServiceList from '@/Components/servicelist/ServiceList';

const seo_smm = () => {
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
            title: 'Logo Design',
            disc: `We create magical & meaningful logos that create the impression, a powerful brand strategy upon your targeted audience. You will love our works.`,
            img: img1,
        },
        {
            title: 'Flyer & Brochure Design',
            disc: `A well-designed brochure is the best way to introduce your company to your potential customers. We design and deliver creative brochures that inspire, persuade and inform.
            `,
            img: img2,
        },
        {
            title: 'Corporate Branding',
            disc: `Your corporate identity design is a visual representation of your brand and its values. We help you to build perfect branding for your business.`,
            img: img3,
        },
        {
            title: 'PSD Template Design',
            disc: `If you are looking for a website that is unique, and dynamic then PSD web template design is very appropriate and that will definitely meet the requirements of our clients.`,
            img: img4,
        },
        {
            title: 'Web & Social Media Ad.',
            disc: `This service is designed for internet marketers, digital marketing agencies, SEO professionals and social media marketers who want to create an impression with the advertisement.`,
            img: img5,
        },
        {
            title: 'Print Media Design',
            disc: `Printed media is very much needed for networking, client meetings, and seminars. We help you to create powerful print media that help you to build a strong community.`,
            img: img6,
        },
    ]
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
			<ServiceList data={serviceData} title="SEO & SMM"/>   
		</>
	);
};

export default seo_smm;