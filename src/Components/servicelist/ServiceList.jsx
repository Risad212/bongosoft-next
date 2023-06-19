import React, { useEffect } from 'react';
import list from './servicelist.module.css';
import Image from 'next/image';
/*-------- Aos Library ------------*/
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServiceList = ({ data, title }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <section className={list.service_details_secend}>
                <div className="container">
                    <div className={`${list.contact_title} text-center`}>
                        <div className={`${list.heading_title} text-center ${list.service_details_title}`}>
                            <h2
                              data-aos="fade-down" 
                              data-aos-once="true"
                              data-aos-delay="500"
                              data-aos-duration="1000"
                             >{`Our ${title} Services`}</h2>
                            <div className="box"
                              data-aos="fade-left" 
                              data-aos-once="true"
                              data-aos-delay="1200"
                              data-aos-duration="1000"
                             >
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
                            data.map((elem,index) => {
                                return (
                                    <>
                                        <div class="col-md-4"
                                          data-aos={elem?.animation?.name} 
                                          data-aos-once="true"
                                          data-aos-delay={elem?.animation?.delay}
                                          data-aos-duration={elem?.animation?.duration} 
                                        >
                                            <div class={list.service_small_section} key={index}>
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