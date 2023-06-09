import Head from "next/head";
import ServiceDetails from '../../Components/servicedetails/ServiceDetails';
import ServiceList from "@/Components/servicelist/ServiceList";

const ServiceLayout = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Bongosoft Ltd. | Services</title>
                <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
            </Head>
            <ServiceDetails />
            <ServiceList />
        </>
    );
};

export default ServiceLayout;