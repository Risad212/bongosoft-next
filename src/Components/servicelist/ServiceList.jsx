import React from 'react';
import list from './servicelist.module.css';
import Image from 'next/image';

const ServiceList = ({ data,title }) => {
    return (
        <>
            <section className={list.service_details_secend}>
                <div className="container">
                    <div className={`${list.contact_title} text-center`}>
                        <div className={`${list.heading_title} text-center ${list.service_details_title}`}>
                            <h2>{`Our ${title} Services`}</h2>
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
                        {
                            data &&
                            data.map((elem) => {
                                return (
                                    <>
                                        <div class="col-md-4">
                                            <div class={list.service_small_section}>
                                                <Image class="img-fluid" src={elem?.img} alt="service" />
                                                <div class={list.service_heading_top}>
                                                    <h4>{elem?.title}</h4>
                                                    <p>{elem?.disc}</p>
                                                    <a class={`btn ${list.btn_details}`} href="software-development-details.php">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceList;