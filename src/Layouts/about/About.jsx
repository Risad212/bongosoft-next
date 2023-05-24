import React from 'react';
import about from './about.module.css';
import aboutImg from '../../Media/about.png'
import Image from 'next/image';

const About = () => {
    return (
        <>
            <div className={about.wrapper}>
                <div className="container">
                    <div class="row new-about">
                        <div class="col-md-12 col-sm-12 col-lg-7">
                            <div class={about.about_content_2} 
                                data-aos="fade-right" 
                                data-aos-once="true"
                                data-aos-delay="300"
                                data-aos-duration="800"
                              >
                                <h3>Why Choose us?</h3>
                                <div class={`${about.about_details}`}>
                                    <p>We are creative, innovators, and designers who are vastly experienced in Website Design &amp; Development, SEO, Graphics Design, Content Marketing, and Social Media Marketing. If you are looking for any service that can satisfy you, then you are in the right place. These are some reason, why you love to work with us. </p>
                                </div>
                                <ul class={about.about_section_ul}>
                                    <li><strong>We Create Experiences: </strong> We provide experiences that are simple to use, attractive, and drive results for your company.</li>
                                    <li><strong>We listen to your needs: </strong> We always involve you in our work every step of the way. So we take your feedback so we can fulfill your requirements.</li>
                                    <li><strong>Developing Step by Step: </strong> We developing your work step by step. We will review every step and improve it. It will help us to give you the best result.</li>
                                    <li><strong>We provide a quick response: </strong>We always make a quick response. We full-service based multi-purpose digital agency, always response to you as early as possible.</li>
                                    <li><strong>We Offer Broad Experience:</strong> We work almost all kind of major types of industries directly and indirectly. From our experience, we can give you the best.</li>
                                </ul>
                                <a class={`btn ${about.btn_start_project}`} href="contact.php"><span class={about.req_link}>Start A Project With Us</span><span class={about.req_link_hover}>Contact Now</span></a>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-5">
                            <div class={`${about.about_image} new_image_new`}
                                data-aos="fade-left" 
                                data-aos-once="true"
                                data-aos-delay="300"
                                data-aos-duration="800" 
                            >
                                <div class={about.des_res}>
                                    <Image src={aboutImg} title="website development company India" />
                                    <div class={`${about.bubbling_dev_icons_vert4} ${about.dev2_an}`}></div>
                                    <div class={`${about.bubbling_dev_icons_vert3} ${about.dev1_an}`}></div>
                                    <div class={`${about.bubbling_dev_icons_vert_seo} ${about.dev1_seo}`}></div>
                                    <div class={`${about.bubbling_dev_icons_vert_graphic} ${about.dev1_graphic}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;