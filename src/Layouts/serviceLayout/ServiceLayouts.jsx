import React from 'react';
import Layout from './service_layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCameraAlt, faCheck,faCubes, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
/*------ import images ----------*/
import img1 from '../../Media/service-details/softoware/pos-software.jpg';
import img2 from '../../Media/service-details/softoware/school-management.jpg';
import img3 from '../../Media/service-details/softoware/custom-software.jpg';

const ServiceLayouts = () => {
    return (
        <>
            <section class={Layout.service_details_page}>
                <div class="container">
                    <div class="row">
                        <div class="software-development-top col-md-8 m-auto">
                            <h2>School Management</h2>
                            <h4>Making your website functional, but appealing.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div class={`row ${Layout.service_icon_main}`}>
                        <div class="col-md-4">
                            <div class={`row ${Layout.service_icon_section}`}>
                                <div class="col-3 service-icon-section-left">
                                    <div class={Layout.service_icon}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                </div>
                                <div class={`col-9 ${Layout.service_icon_section_right}`}>
                                    <h4>RESPONSIVE</h4>
                                    <p>Responsive simply means your website adapts to all devices – that includes cell phones, iPads, tablets, or desktops. Having a responsive website is a must have with Google’s latest update.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class={`row ${Layout.service_icon_section}`}>
                                <div class={`col-3 ${Layout.service_icon_section_left}`}>
                                    <div class={Layout.service_icon}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                </div>
                                <div class={`col-9 ${Layout.service_icon_section_right}`}>
                                    <h4>SEO OPTIMIZED</h4>
                                    <p>Responsive simply means your website adapts to all devices – that includes cell phones, iPads, tablets, or desktops. Having a responsive website is a must have with Google’s latest update.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row service-icon-section">
                                <div class="col-3 service-icon-section-left">
                                    <div class={Layout.service_icon}>
                                        <FontAwesomeIcon icon={faCheck} className={Layout.fa_2x} />
                                    </div>
                                </div>
                                <div class={`col-9 ${Layout.service_icon_section_right}`}>
                                    <h4>E-COMMERCE</h4>
                                    <p>Responsive simply means your website adapts to all devices – that includes cell phones, iPads, tablets, or desktops. Having a responsive website is a must have with Google’s latest update.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row service-icon-section">
                                <div class="col-3 service-icon-section-left">
                                    <div class={Layout.service_icon}>
                                        <FontAwesomeIcon icon={faCheck} className={Layout.fa_2x} />
                                    </div>
                                </div>
                                <div class={`col-9 ${Layout.service_icon_section_right}`}>
                                    <h4>ANALYTICS</h4>
                                    <p>Responsive simply means your website adapts to all devices – that includes cell phones, iPads, tablets, or desktops. Having a responsive website is a must have with Google’s latest update.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row service-icon-section">
                                <div class="col-3 service-icon-section-left">
                                    <div class={Layout.service_icon}>
                                        <FontAwesomeIcon icon={faCheck} className={Layout.fa_2x} />
                                    </div>
                                </div>
                                <div class={`col-9 ${Layout.service_icon_section_right}`}>
                                    <h4>SOCIAL MEDIA</h4>
                                    <p>Responsive simply means your website adapts to all devices – that includes cell phones, iPads, tablets, or desktops. Having a responsive website is a must have with Google’s latest update.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row service-icon-section">
                                <div class="col-3 service-icon-section-left">
                                    <div class={Layout.service_icon}>
                                        <FontAwesomeIcon icon={faCheck} className={Layout.fa_2x} />
                                    </div>
                                </div>
                                <div class={`col-9 ${Layout.service_icon_section_right}`}>
                                    <h4>JQUERY</h4>
                                    <p>Responsive simply means your website adapts to all devices – that includes cell phones, iPads, tablets, or desktops. Having a responsive website is a must have with Google’s latest update.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*------ feature section -------- */}
            <section class={Layout.features_section}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class={Layout.features_left}>
                                <h3>Features</h3>
                                <p>As a leading Cincinnati Web Design company, we take pride in the results that we provide to our clients. We don’t just build your website, we build your business. Every website we design is custom built to fit your company’s needs. You work specifically with our team of in-house designers to produce a professional, responsive, and strategic design. <br /> needs. You work specifically with our team of in-house designers</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="features-right">
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="features-icon">
                                            <FontAwesomeIcon icon={faGlobeAmericas} className={Layout.fa_2x} />
                                        </div>
                                    </div>
                                    <div class={`col-md-11 ${Layout.features_icon_text}`}>
                                        <h3>MEETING &amp; ESTIMATE</h3>
                                        <p>We tell all our clients that we are an open book. Ask us anything! After we collect some information we can get you an estimate.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="features-icon">
                                            <FontAwesomeIcon icon={faCameraAlt} className={Layout.fa_2x} />
                                        </div>
                                    </div>
                                    <div class={`col-md-11 ${Layout.features_icon_text}`}>
                                        <h3>DESIGN WEBSITE</h3>
                                        <p>We tell all our clients that we are an open book. Ask us anything! After we collect some information we can get you an estimate.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="features-icon">
                                            <FontAwesomeIcon icon={faCubes} className={Layout.fa_2x} />
                                        </div>
                                    </div>
                                    <div class={`col-md-11 ${Layout.features_icon_text}`}>
                                        <h3>TAKE IT LIVE!</h3>
                                        <p>We tell all our clients that we are an open book. Ask us anything! After we collect some information we can get you an estimate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- latest work ---------*/}
            <section class={Layout.our_latest_work}>
                <div class="container">
                    <div class={`${Layout.contact_title} text-center`}>
                        <div class={`${Layout.heading_title} text-center ${Layout.service_details_title}`}>
                        <h2
                          data-aos="fade-down" 
                          data-aos-once="true"
                          data-aos-delay="500"
                          data-aos-duration="1000"
                         >Our Latest Work</h2>
                        <div className="box"
                           data-aos="fade-left" 
                           data-aos-once="true"
                           data-aos-delay="800"
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

                    <div class={`row ${Layout.latest_work_row}`}>
                        <div class="col-md-4">
                            <div class={Layout.snip1543}>
                                <Image class="img-fluid" src={img1} alt="Recent Work" />
                                    <div class={Layout.caption}>
                                        <h3>Web Development</h3>
                                        <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                                    </div>
                                    <a href="#"></a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class={Layout.snip1543}>
                                <Image class="img-fluid" src={img2} alt="Recent Work" />
                                    <div class={Layout.caption}>
                                        <h3>Web Development</h3>
                                        <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                                    </div>
                                    <a href="#"></a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class={Layout.snip1543}>
                                <Image class="img-fluid" src={img3} alt="Recent Work"/>
                                    <div class={Layout.caption}>
                                        <h3>Web Development</h3>
                                        <p>The only skills I have the patience to learn are those that have no real application in life.</p>
                                    </div>
                                    <a href="#"></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class={Layout.latest_work}>
                            <a href="#" class={`${Layout.portfilio_btn} btn`}>Our Portfolio</a>
                            <a href="#" class={`${Layout.portfilio_btn_2} btn`}>Contact Us Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceLayouts;