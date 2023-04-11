import React from 'react';
import service from './service.module.css';
import Image from 'next/image';

const Service = () => {
    return (
        <>
            <section class={service.service_2}>
                <div class="container">
                    <div class={`${service.heading_title} text-center`}>
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
                    <div class="service_sub_content">
                        <div class={service.service_grid}>
                            <div>
                                <div class={service.service_details}>
                                    <div class={service.service_content}>
                                        <div class="icon"><Image class="web_development" src="" alt="Software Development" /></div>
                                        <h3>Software Development</h3>
                                        <ul class="service_sub_title">
                                            <li><i class="fa fa-long-arrow-right"></i> Point Of Sale </li>
                                            <li> <i class="fa fa-long-arrow-right"></i> School Management </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Pharmacy Management </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Super Shop Management</li>
                                            <li><i class="fa fa-long-arrow-right"></i> Restaurant Management </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Custom Software </li>
                                        </ul>
                                        <a class="btn btn-service" href="software-development.php">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div class="service_item web-design">
                                <div class="service_details">
                                    <div class="service_content">
                                        <div class="icon"><Image class="web_design_animation" src="" alt="Web Design" /></div>
                                        <h3>Web Design</h3>
                                        <ul class="service_sub_title">
                                            <li><i class="fa fa-long-arrow-right"></i> PSD To HTML </li>
                                            <li> <i class="fa fa-long-arrow-right"></i> UI/UX Design </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Web Template Design </li>
                                            <li><i class="fa fa-long-arrow-right"></i> PSD/HTML To WordPress</li>
                                            <li><i class="fa fa-long-arrow-right"></i> Front End Design </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Email Template </li>
                                        </ul>
                                        <a class="btn btn-service" href="web-design.php">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div class="service_item web-development">
                                <div class="service_details">
                                    <div class="service_content">
                                        <div class="icon"><Image class="web_development_animation" src="" /></div>
                                        <h3>Web Development</h3>
                                        <ul class="service_sub_title">
                                            <li><i class="fa fa-long-arrow-right"></i> News Portal Development </li>
                                            <li> <i class="fa fa-long-arrow-right"></i> Custom CMS Development </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Educational Ins. Website </li>
                                            <li><i class="fa fa-long-arrow-right"></i> E-Commerce Development</li>
                                            <li><i class="fa fa-long-arrow-right"></i> NGO Website Development </li>
                                            <li><i class="fa fa-long-arrow-right"></i> WordPress Development </li>
                                        </ul>
                                        <a class="btn btn-service" href="web-development.php">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div class="service_item graphic">
                                <div class="service_details">
                                    <div class="service_content">
                                        <div class="icon"><Image class="web_development" src="" alt="Graphic Design" /></div>
                                        <h3>Graphic Design</h3>
                                        <ul class="service_sub_title">
                                            <li><i class="fa fa-long-arrow-right"></i> Logo Design </li>
                                            <li> <i class="fa fa-long-arrow-right"></i> Flyer &amp; Brochure Design </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Corporate Branding </li>
                                            <li><i class="fa fa-long-arrow-right"></i> PSD Template Design </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Web &amp; Social Media Ad. </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Prient Media Design </li>
                                        </ul>
                                        <a class="btn btn-service" href="graphics-design.php">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div class="service_item seo">
                                <div class="service_details">
                                    <div class="service_content">
                                        <div class="icon"><Image class="web_development_animation" src="" alt="SEO &amp; SMM" /></div>
                                        <h3>Digital Marketing</h3>
                                        <ul class="service_sub_title">
                                            <li><i class="fa fa-long-arrow-right"></i> Social Media Ad. Campaign </li>
                                            <li> <i class="fa fa-long-arrow-right"></i> Onsite SEO Service </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Website Ranking Service </li>
                                            <li><i class="fa fa-long-arrow-right"></i> PSD Template Design </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Web &amp; Social Media Ad. </li>
                                            <li><i class="fa fa-long-arrow-right"></i> Prient Media Design </li>
                                        </ul>
                                        <a class="btn btn-service" href="seo-smm.php">Details</a>
                                    </div>
                                </div>
                            </div>

                            <div class="service_item domain">
                                <div class="service_details">
                                    <a href="#">
                                        <div class="service_content">
                                            <div class="icon"><Image class="web_domain" src="" alt="Domain &amp; Hosting" /></div>
                                            <h3>Domain &amp; Hosting</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="service_item support">
                                <div class="service_details">
                                    <a href="#">
                                        <div class="service_content">
                                            <div class="icon"><Image class="bg-red" src="" alt="Support" /></div>
                                            <h3>Support</h3>
                                        </div>
                                    </a>
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