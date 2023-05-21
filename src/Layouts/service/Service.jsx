import React from 'react';
import service from './service.module.css';
import Image from 'next/image';
// ========= Icon import =======================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
// ========= Image import =======================
import softoware from '../../Media/software.png';
import webDesign from '../../Media/design.png';
import webdev from '../../Media/marketing-bg-1.jpg'


const Service = () => {
    console.log(softoware);
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
                        <div class={`${service.service_item} ${service.software}`}>
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                        <Image src={softoware} alt="Software Development" />
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
                        <div class={`${service.service_item} ${service.web_design}`}>
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                       <Image src={webDesign} alt="Web Design" />
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
                         <div class={`${service.service_item} ${service.web_development}`}>
                            <div class={service.service_details}>
                                <div class={service.service_content}>
                                    <div>
                                       <Image src={webdev} alt="Web Development" />
                                     </div>
                                    <h3>Web Development</h3>
                                    <ul class={service.service_sub_title}>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> News Portal Development </li>
                                        <li> <FontAwesomeIcon icon={faArrowRightLong} /> Custom CMS Development</li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> Educational Ins. Website </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> E-Commerce Development </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> NGO Website Development </li>
                                        <li><FontAwesomeIcon icon={faArrowRightLong} /> WordPress Development </li>
                                    </ul>
                                    <a class={`btn ${service.btn_service}`} href="web-design.php">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;