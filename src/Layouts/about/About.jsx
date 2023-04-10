import React from 'react';
import about from './about.module.css';

const About = () => {
    return (
        <>
            <div className={about.wrapper}>
                <div className="container">
                    <div class="row new-about">
                        <div class="col-md-12 col-sm-12 col-lg-7">
                            <div class={about.about_content_2}>
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
                            <div class="about_image new_image_new">
                                <div class="des-res">
                                    <img src="images/custom/about/about-section.png" alt="website development services India" title="website development company India" />
                                    <div class="bubbling-dev-icons-vert4 dev2-an"></div>
                                    <div class="bubbling-dev-icons-vert3 dev1-an"></div>
                                    <div class="bubbling-dev-icons-vert-seo dev1-seo"></div>
                                    <div class="bubbling-dev-icons-vert-graphic dev1-graphic"></div>
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