import React from 'react';
import service from './service.module.css';
import Image from 'next/image';
import softoware from '../../Media/software.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faArrowRight, faArrowRightArrowLeft, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    return (
        <>
            <section className={service.service_2}>
                <div className="container">
                    <div className={`${service.heading_title} text-center`}>
                        <h2> Our Services </h2>
                        <div className={service.box}>
                            <div class={`${service.box_sm} ${service.red}`}></div>
                            <div class={`${service.box_sm} ${service.orange}`}></div>
                            <div class={`${service.box_sm} ${service.yellow}`}></div>
                            <div class={`${service.box_sm} ${service.green}`}></div>
                            <div class={`${service.box_sm} ${service.blue}`}></div>
                            <div class={`${service.box_sm} ${service.purple}`}></div>
                        </div>
                    </div>
                    <div className={service.service_grid}>
                        <div classNameName={`${service.service_item} software`}>
                            <div className={service.service_details}>
                                <div className={service.service_content}>
                                    <div className="icon">
                                         <Image className={service.web_development} src="images/custom/service-section/software.png" alt="Software Development" />
                                     </div>
                                    <h3>Software Development</h3>
                                    <ul className={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong}/><i className="fa fa-long-arrow-right"></i> Point Of Sale </li>
                                        <li> <FontAwesomeIcon icon={faArrowRightLong}/><i className="fa fa-long-arrow-right"></i> School Management </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong}/><i className="fa fa-long-arrow-right"></i> Pharmacy Management </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong}/><i className="fa fa-long-arrow-right"></i> Super Shop Management</li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong}/><i className="fa fa-long-arrow-right"></i> Restaurant Management </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong}/><i className="fa fa-long-arrow-right"></i> Custom Software </li>
                                    </ul>
                                    <a className={`btn ${service.btn_service}`} href="#">Details</a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="service_item web-design wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.3s; animation-name: fadeInUp;">
                            <div className="service_details">
                                <div className="service_content">
                                    <div className="icon"><img className="web_design_animation" src="images/custom/service-section/design.png" alt="Web Design"></div>
                                    <h3>Web Design</h3>
                                    <ul className="service_sub_title">
                                        <li><i className="fa fa-long-arrow-right"></i> PSD To HTML </li>
                                        <li> <i className="fa fa-long-arrow-right"></i> UI/UX Design </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Web Template Design </li>
                                        <li><i className="fa fa-long-arrow-right"></i> PSD/HTML To WordPress</li>
                                        <li><i className="fa fa-long-arrow-right"></i> Front End Design </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Email Template </li>
                                    </ul><!--/.service_sub_title-->
                                    <a className="btn btn-service" href="web-design.php">Details</a>
                                </div><!--/.service_content-->
                            </div><!--/.service_details-->
                        </div> */}

                        {/* <div className="service_item web-development wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".6s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.6s; animation-name: fadeInDown;">
                            <div className="service_details">
                                <div className="service_content">
                                    <div className="icon"><img className="web_development_animation" src="images/custom/service-section/development.png" alt="Web Development"></div>
                                    <h3>Web Development</h3>
                                    <ul className="service_sub_title">
                                        <li><i className="fa fa-long-arrow-right"></i> News Portal Development </li>
                                        <li> <i className="fa fa-long-arrow-right"></i> Custom CMS Development </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Educational Ins. Website </li>
                                        <li><i className="fa fa-long-arrow-right"></i> E-Commerce Development</li>
                                        <li><i className="fa fa-long-arrow-right"></i> NGO Website Development </li>
                                        <li><i className="fa fa-long-arrow-right"></i> WordPress Development </li>
                                    </ul><!--/.service_sub_title-->
                                    <a className="btn btn-service" href="web-development.php">Details</a>
                                </div><!--/.service_content-->
                            </div><!--/.service_details-->
                        </div>--/.service_item-- */}

                        <div className="service_item graphic wow fadeInRight" data-wow-duration=".5s" data-wow-delay="1.8s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 1.8s; animation-name: fadeInRight;">
                            <div className="service_details">
                                <div className="service_content">
                                    <div className="icon"><img className="web_development" src="images/custom/service-section/graphic.png" alt="Graphic Design"></div>
                                    <h3>Graphic Design</h3>
                                    <ul className="service_sub_title">
                                        <li><i className="fa fa-long-arrow-right"></i> Logo Design </li>
                                        <li> <i className="fa fa-long-arrow-right"></i> Flyer &amp; Brochure Design </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Corporate Branding </li>
                                        <li><i className="fa fa-long-arrow-right"></i> PSD Template Design </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Web &amp; Social Media Ad. </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Prient Media Design </li>
                                    </ul><!--/.service_sub_title-->
                                    <a className="btn btn-service" href="graphics-design.php">Details</a>
                                </div><!--/.service_content-->
                            </div><!--/.service_details-->
                        </div>{/* --/.service_item-- */}

                        <div className="service_item seo wow fadeInLeft" data-wow-duration=".5s" data-wow-delay="1.5s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 1.5s; animation-name: fadeInLeft;">
                            <div className="service_details">
                                <div className="service_content">
                                    <div className="icon"><img className="web_development_animation" src="images/custom/service-section/seo.png" alt="SEO &amp; SMM"></div>
                                    <h3>Digital Marketing</h3>
                                    <ul className="service_sub_title">
                                        <li><i className="fa fa-long-arrow-right"></i> Social Media Ad. Campaign </li>
                                        <li> <i className="fa fa-long-arrow-right"></i> Onsite SEO Service </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Website Ranking Service </li>
                                        <li><i className="fa fa-long-arrow-right"></i> PSD Template Design </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Web &amp; Social Media Ad. </li>
                                        <li><i className="fa fa-long-arrow-right"></i> Prient Media Design </li>
                                    </ul><!--/.service_sub_title-->
                                    <a className="btn btn-service" href="seo-smm.php">Details</a>
                                </div><!--/.service_content-->
                            </div><!--/.service_details-->
                        </div>{/* --/.service_item-- */}

                        <div className="service_item domain wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".9s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.9s; animation-name: fadeInUp;">
                            <div className="service_details">
                                <a href="#">
                                    <div className="service_content">
                                        <div className="icon"><img className="web_domain" src="images/custom/service-section/domain.png" alt="Domain &amp; Hosting"></div>
                                        <h3>Domain &amp; Hosting</h3>
                                    </div><!--/.service_content-->
                                </a>
                            </div><!--/.service_details-->
                        </div>{/* --/.service_item-- */}

                        <div className="service_item support wow fadeInRight" data-wow-duration=".5s" data-wow-delay="2.1s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 2.1s; animation-name: fadeInRight;">
                            <div className="service_details">
                                <a href="#">
                                    <div className="service_content">
                                        <div className="icon"><img className="bg-red" src="images/custom/service-section/suppport.png" alt="Support"></div>
                                        <h3>Support</h3>
                                    </div><!--/.service_content-->
                                </a>
                            </div><!--/.service_details-->
                        </div>{/* --/.service_item-- */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;