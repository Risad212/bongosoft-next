import React from 'react';
import layoute from './servicedetails.module.css';
import Image from 'next/image';
import { motion } from "framer-motion"

const ServiceDetails = ({info}) => {
    return (
        <div>
            <section className={layoute.service_details_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <motion.div className={layoute.service_image} 
                              initial={{ x: -300, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: 300, opacity: 0 }}
                              transition={{ duration: 0.5,ease: "easeInOut", delay: .5}}
                             >
                                <Image className="img-fluid" src={info?.img} alt="Software Development" />
                           </motion.div>
                        </div>
                        <motion.div className="col-md-6"
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -300, opacity: 0 }}
                          transition={{ duration: 0.5,ease: "easeInOut", delay: .9}}
                         >
                            <div className={layoute.service_details}>
                                <h3>{info?.title}</h3>
                                <p>{info?.disc1}</p>
                                <p>{info?.disc2}</p>
                            </div>
                            <div className={layoute.service_section_btn}>
                                <a href="#" className={layoute.btn_11}>Get a quote</a>
                                <a className={layoute.btn_6} href="#">Contact Us Now<span></span></a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;