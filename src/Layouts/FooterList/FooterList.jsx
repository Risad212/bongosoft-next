import React from 'react';
import footerlink from './footerlist.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const FooterList = () => {
    return (
        <>
            <div class="container">
                <div class={`${footerlink.footer_links} row`}>
                    <div class={`col-sm-12 col-md-6 col-lg-2`} 
                         data-aos="fade-down" 
                         data-aos-once="true"
                         data-aos-delay="800"
                         data-aos-duration="500"
                     >
                        <h4>Navigation</h4>
                        <ul class={footerlink.list_footer_menu}>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="about.php">About</a></li>
                            <li><a href="service.php">Services</a></li>
                            <li><a href="our-work.php">Our Works</a></li>
                            <li><a href="blog.php">Blog</a></li>
                            <li><a href="contact.php">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3 links-02"
                        data-aos="fade-down" 
                        data-aos-once="true"
                        data-aos-delay="1000"
                        data-aos-duration="500"
                      >
                        <h4>Services</h4>
                        <ul class={footerlink.list_footer_menu}>
                            <li><a href="software-development.php">Software Development</a></li>
                            <li><a href="web-design.php">Web Design</a></li>
                            <li><a href="web-development.php">Web Development</a></li>
                            <li><a href="graphics-design.php">Graphics Design</a></li>
                            <li><a href="seo-smm.php">Digital Marketing</a></li>
                            <li><a href="#">Domain &amp; Hosting</a></li>
                            <li><a href="contact.php">Support</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3"
                       data-aos="fade-down" 
                       data-aos-once="true"
                       data-aos-delay="1200"
                       data-aos-duration="500"
                     >
                        <h4>Contact Us</h4>
                        <div class="footer-widget-footer">
                            <form method="post" action="php/send-contact.php">
                                <div class={footerlink.input_container}>
                                    <input type="text" id="name" name="contact-name" required="required" />
                                        <label for="name">Your Name</label>
                                        <div class={footerlink.bar}></div>
                                </div>
                                <div class={footerlink.input_container}>
                                    <input type="email" id="email" name="contact-email" required="required" />
                                        <label for="email">Your Email</label>
                                        <div className={footerlink.bar}></div>
                                </div>
                                <div class={footerlink.input_container}>
                                    <input type="text" id="message" name="contact-message" required="required" />
                                        <label for="message">Your Message</label>
                                        <div className={footerlink.bar}></div>
                                </div>
                                <div class={footerlink.footer_btn}>
                                    <button id="contact-btn" class={footerlink.btn_1} name="footerButton" type="submit">
                                        <FontAwesomeIcon icon={faPaperPlane} className={footerlink.send}/>
                                        <FontAwesomeIcon icon={faPaperPlane} className={footerlink.send2}/>
                                        <span>Send </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4"
                       data-aos="fade-down" 
                       data-aos-once="true"
                       data-aos-delay="1400"
                       data-aos-duration="500"
                     >
                        <h4>Newsletter</h4>
                        <div class={`${footerlink.newsletter_box} ${footerlink.clearfix}`}>
                            <form action="php/subscribe.php" method="post" class="validate">
                                <input class={footerlink.txt_box} type="email" name="EMAIL" placeholder="Your Email address" required="required" />
                                    <button class={`${footerlink.subscribe_btn} ${footerlink.hvr_grow_shadow}`} type="submit" name="subscribe">Subscribe Now!</button>
                                    <p>Enter your email ID above to subscribe to our newsletter.</p>
                            </form>
                        </div>
                        <h4>Find us on</h4>
                        <div class={footerlink.social}>
                            <a class={footerlink.facebook} href="https://www.facebook.com/bongosoftbd/" target="_blank"></a>
                            <a class={footerlink.twitter} href="https://twitter.com/bongosoft" target="_blank"></a>
                            <a class={footerlink.pinstar} href="https://www.pinterest.com/bongosoftbd/" target="_blank"></a>
                            <a class={footerlink.youtube} href="https://www.youtube.com/channel/UCJRcAEdbCQif_HZH1IecY9g" target="_blank"></a>
                            <a class={footerlink.linkedin} href="https://www.linkedin.com/company/14545033/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterList;