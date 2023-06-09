import React from 'react';
import service from './service.module.css';
import Image from 'next/image';
// ========= Icon import =======================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
// ========= Image import =======================
import softoware from '../../Media/software.png';
import webDesign from '../../Media/design.png';
import webdev from '../../Media/development.png';
import graphic from '../../Media/graphic-design.png';
import seo from '../../Media/seo-service.png';
import domain from '../../Media/domain.png';
import support from '../../Media/suppport.png';

const Service = () => {
    return (
        <>
            <section className={service.service_2}>
                <div className="container">
                    <div className={`${service.heading_title} text-center`}>
                        <h2
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                        > Our Services </h2>
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
                    <div className={service.service_grid}>
                        <div class={`${service.service_item} ${service.software}`}
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-delay="1400"
                            data-aos-duration="500"
                        >
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                        <Image className={service.web_development_animation} src={softoware} alt="Software Development" />
                                    </div>
                                    <h3>Software Development</h3>
                                    <ul class={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Point Of Sale </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> School Management </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Pharmacy Management </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Super Shop Management</li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Restaurant Management </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Custom Software </li>
                                    </ul>
                                    <a class={`btn ${service.btn_service}`} href="software-development.php">Details</a>
                                </div>
                            </div>
                        </div>
                        {/*----- service item --------*/}
                        <div class={`${service.service_item} ${service.web_design}`}
                            data-aos="fade-zoom-in"
                            data-aos-once="true"
                            data-aos-delay="800"
                            data-aos-duration="1000"
                        >
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                        <Image className={service.web_design_animation} src={webDesign} alt="Web Design" />
                                    </div>
                                    <h3>Web Design</h3>
                                    <ul class={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> PSD To HTML </li>
                                        <li> <FontAwesomeIcon icon={faArrowRightLong} /> UI/UX Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Web Template Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> PSD/HTML To WordPress</li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Front End Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Email Template </li>
                                    </ul>
                                    <a class={`btn ${service.btn_service}`} href="web-design.php">Details</a>
                                </div>
                            </div>
                        </div>
                        {/*----- service item --------*/}
                        <div class={`${service.service_item} ${service.web_development}`}
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-delay="1200"
                            data-aos-duration="500"
                        >
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                        <Image className={service.web_development_animation} src={webdev} alt="Web Development" />
                                    </div>
                                    <h3>Web Development</h3>
                                    <ul class={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> News Portal Development </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Custom CMS Development</li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Educational Ins. Website </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> E-Commerce Development </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> NGO Website Development </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> WordPress Development </li>
                                    </ul>
                                    <a class={`btn ${service.btn_service}`} href="#">Details</a>
                                </div>
                            </div>
                        </div>
                        {/*----- service item --------*/}
                        <div class={`${service.service_item} ${service.graphic}`}
                            data-aos="fade-left"
                            data-aos-once="true"
                            data-aos-delay="1600"
                            data-aos-duration="500"
                        >
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                        <Image className={service.graphic_design_animation} src={graphic} alt="Web Development" />
                                    </div>
                                    <h3>Graphic Design</h3>
                                    <ul class={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Logo Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Flyer & Brochure Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Corporate Branding </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> PSD Template Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Web & Social Media Ad. </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Prient Media Design </li>
                                    </ul>
                                    <a class={`btn ${service.btn_service}`} href="#">Details</a>
                                </div>
                            </div>
                        </div>
                        {/*----- service item --------*/}
                        <div class={`${service.service_item} ${service.seo}`}
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-delay="1500"
                            data-aos-duration="500"
                        >
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                        <Image className={service.web_development_animation} src={seo} alt="Web Development" />
                                    </div>
                                    <h3>Digital Marketing</h3>
                                    <ul class={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} />  Social Media Ad. Campaign </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Onsite SEO Service </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Website Ranking Service </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> PSD Template Design </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Web & Social Media Ad. </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Prient Media Design </li>
                                    </ul>
                                    <a class={`btn ${service.btn_service}`} href="#">Details</a>
                                </div>
                            </div>
                        </div>
                        {/*----- service item --------*/}
                        <div class={`${service.service_item} ${service.domain}`}
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-delay="1200"
                            data-aos-duration="500"
                        >
                            <div class={service.service_details}>
                                <a href="#">
                                    <div class={service.service_content}>
                                        <div class="icon">
                                            <Image className={service.web_domain} src={domain} alt="Domain &amp; Hosting" />
                                        </div>
                                        <h3>Domain &amp; Hosting</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*----- service item --------*/}
                        <div class={`${service.service_item} ${service.support}`}
                            data-aos="fade-left"
                            data-aos-once="true"
                            data-aos-delay="1700"
                            data-aos-duration="500"
                        >
                            <div class={service.service_details}>
                                <a href="#">
                                    <div class={service.service_content}>
                                        <div class="icon">
                                            <Image className={service.bg_red} src={support} alt="Domain &amp; Hosting" />
                                        </div>
                                        <h3>Support</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;