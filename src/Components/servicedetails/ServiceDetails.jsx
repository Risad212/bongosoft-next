import React from 'react';
import layoute from './servicedetails.module.css';
import Image from 'next/image';
import details from '../../Media/service details/software-development.jpg';


const ServiceDetails = () => {
    return (
        <div>
            <section className={layoute.service_details_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={layoute.service_image}>
                                <Image className="img-fluid" src={details} alt="Software Development" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={layoute.service_details}>
                                <h3>Software Development</h3>
                                <p>Your business needs software for supporting your operations. It requires for scaling and coordinating with all operation department. Bongosoft Ltd. has the experience, tools, and technologies to create such demanding software. You will find some software that we are developing.</p>
                                <p>We are using asp.net, PHP, Java, Node.js, latest java framework for developing our software. Your need will always get priority from our end. We provide you the best solution in the market. Bongosoft Ltd. has the experience, tools, and technologies to create such demanding software. You will find some software that we are developing.</p>
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