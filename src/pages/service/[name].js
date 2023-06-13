import Head from "next/head";
import ServiceDetails from '../../Components/servicedetails/ServiceDetails';
import ServiceList from "@/Components/servicelist/ServiceList";
import {serviceInfo} from '../../DataStorge/Datastorge';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ServiceLayout = () => {
   const [serviceObj, setServiceObj] = useState()
   const router = useRouter();
    let path = router.asPath;
    let modifyPath = path.slice(9);

    let extractData = serviceInfo.filter(element => {
       return element.serviceName == modifyPath
    })

    useEffect(() => {
        setServiceObj(extractData)
    },[])

   
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Bongosoft Ltd. | Services</title>
            </Head>
            <ServiceDetails passServiceInfo={serviceObj}/>
            <ServiceList />
        </>
    );
};

export default ServiceLayout;