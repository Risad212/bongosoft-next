import React, { useEffect } from 'react';
import ourwork from './ourwork.module.css';
import res from '../../Media/res.png'
import dev from '../../Media/dev.png'
import imp from '../../Media/imp.png'
import Image from 'next/image';
/*---------- Aos -------------*/
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurWork = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="container">
                <div className={ourwork.containerAbout}>
                    <div className={`${ourwork.heading_title} text-center`}>
                         <div 
                            data-aos="fade-down" 
                            data-aos-once="false"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                          >
                            <h2> How We Work ? </h2>
                         </div>
                        <div className={ourwork.box}
                            data-aos="fade-left" 
                            data-aos-once="false"
                            data-aos-delay="1200"
                            data-aos-duration="1000"
                          >
                            <div className={`${ourwork.boxSm} ${ourwork.red}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.orange}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.yellow}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.green}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.blue}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.purple}`}></div>
                        </div>
                    </div>
                    <div className={`row ${ourwork.sub_about}`}>
                        <div className="col-md-4 text-center"
                             data-aos="fade-right" 
                             data-aos-once="false"
                             data-aos-delay="1200"
                             data-aos-duration="500"
                          >
                            <div className={`${ourwork.block} mb-5`}>
                                <div className={ourwork.block_border}>
                                    <div className={ourwork.icon_box}>
                                        <Image src={res} alt="Icon" />
                                    </div>
                                    <div className="content text-center">
                                        <h3> Research </h3>
                                        <p>Research is vastly crucial for any service. We research every part of our work. Our research team does the primary work so that we can proceed to the next step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center"
                             data-aos="fade-up" 
                             data-aos-once="false"
                             data-aos-delay="900"
                             data-aos-duration="500"
                          >
                            <div className={`${ourwork.block} mb-5`}>
                                <div className={ourwork.block_border}>
                                    <div className={ourwork.icon_box}>
                                        <Image src={dev} alt="Icon" />
                                    </div>
                                    <div className="content text-center">
                                        <h3> Development </h3>
                                        <p>After research about our project, we are going to develop our idea. We build our project scratch to serve you the perfect. Your project is our concern.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center"
                            data-aos="fade-left" 
                            data-aos-once="false"
                            data-aos-delay="1300"
                            data-aos-duration="500"
                          >
                            <div className={`${ourwork.block} mb-5`}>
                                <div className={ourwork.block_border}>
                                    <div className={ourwork.icon_box}>
                                        <Image src={imp} alt="Icon" />
                                    </div>
                                    <div className="content text-center">
                                        <h3> Implement </h3>
                                        <p>After the perfect scratching, we implement the ideas in the project to satisfy you completely. We love to meet your requirement. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurWork;