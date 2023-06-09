import React from 'react';
import list from './servicelist.module.css';
import Image from 'next/image';

import img from '../../Media/service details/pos-software.jpg';

const ServiceList = () => {
    return (
        <>
            <section className={list.service_details_secend}>
                <div className="container">
                    <div className={`${list.contact_title} text-center`}>
                        <div className={`${list.heading_title} text-center ${list.service_details_title}`}>
                            <h2> Our Software Development Services</h2>
                            <div className="box">
                                <div className="box-sm red"></div>
                                <div className="box-sm orange"></div>
                                <div className="box-sm yellow "></div>
                                <div className="box-sm green "></div>
                                <div className="box-sm blue "></div>
                                <div className="box-sm purple"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`${list.service_small_section}`}>
                                <Image className="img-fluid" src={img} alt="service" />
                                    <div className={list.service_heading_top}>
                                        <h4>Point Of Sale</h4>
                                        <p>Track your customers' history, your inventory, calculate daily sales, and print receipt. You get instant feedback to improve your service.</p>
                                        <a className={`btn ${list.btn_details}`} href="software-development-details.php">Details</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceList;