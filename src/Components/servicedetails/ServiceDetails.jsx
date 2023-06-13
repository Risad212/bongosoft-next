import React from 'react';
import layoute from './servicedetails.module.css';
import Image from 'next/image';
import details from '../../Media/service details/software-development.jpg';


const ServiceDetails = ({passServiceInfo}) => {
    console.log(passServiceInfo);
    // const {title,img,disc1,disc2} = passServiceInfo[0]
    return (
        <div>
            <section className={layoute.service_details_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={layoute.service_image}>
                                <Image className="img-fluid" src="" alt="Software Development" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={layoute.service_details}>
                                <h3></h3>
                                <p></p>
                                <p></p>
                            </div>
                            <div className={layoute.service_section_btn}>
                                <a href="#" className={layoute.btn_11}>Get a quote</a>
                                <a className={layoute.btn_6} href="#">Contact Us Now<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;