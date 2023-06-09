import Head from "next/head";
import ServiceDetails from '../../Components/servicedetails/ServiceDetails';
import ServiceList from "@/Components/servicelist/ServiceList";
import {servicelist} from '../../DataStorge/Datastorge';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ServiceLayout = () => {
   const [serviceObj, setServiceObj] = useState()
   const router = useRouter();
    let path = router.asPath;
    let modifyPath = path.slice(9);
    let getData = servicelist.filter((elem) => {
       return elem.serviceName === modifyPath;
    })
    useEffect(() => {
        setServiceObj(getData[0]);
    },[])

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Bongosoft Ltd. | Services</title>
            </Head>
            <ServiceDetails />
            <ServiceList serviceObj={serviceObj}/>
        </>
    );
};

export default ServiceLayout;