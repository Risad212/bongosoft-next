import React from 'react';
import footer from './footer.module.css';

const Footer = () => {
    return (
        <>
            <div classNameName={footer.paralax}>
                <div classNameName={footer.overlay}>
                    <div className={footer.parallaxText}>
                        <h3>Let's talk about what we can build together</h3>
                        <p>Whatever may be your requirement - be it a simple website design, a complex software or application development, <br />
                            an ecommerce website, a logo and brand identity design,your apps marketing or a full <br />
                            fledged digital marketing campaign - we have a solution for you.</p>
                        <div classNameName={`${footer.btnQuote} m-auto col-md-5`}>
                            <a href="contact.php" classNameName="btn-contact-us" id={footer.btn}>Contact us now for a free quote!</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container main-top-footer">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-widget wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".9s" style="visibility: visible;">
                            <h3 className="widgettitle">ABOUT US</h3>
                            <p>Bongosoft is a leading web design company in Bangladesh. We are also a digital marketing agency in Bangladesh providing not only website design &amp; development, seo service but also graphic designing, content marketing, making online Bangla newspaper and effective social media marketing all over Bangladesh and many more. We can provide the solution for your all kinds of digital need.</p>
                            <p>Bongosoft. Ltd is a creative digital agency from Dhaka, Bangladesh. We are working in Software development, Website Design & Development, creative Graphics design, and Digital Marketing. We can provide the solution for your all kinds of digital need. </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className={`${footer.footerWidget} ${footer.recent_post}`} style={{visibility: "visible"}}>
                            <h3 className={footer.widgettitle}>RECENT POSTS</h3>
                            <div className="blog-small">
                                <a href="blog-details-6.php">
                                    <div className="blog-small-left">
                                        <img className="img-fluid" src="images/custom/blog/blog-small-6.jpg" alt="blog" />
                                    </div>
                                    <div className="blog-small-right">
                                        <h5>Best File Sharing Websites To Share Large File In Online</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-small">
                                <a href="blog-details-4.php">
                                    <div className="blog-small-left">
                                        <img className="img-fluid" src="images/custom/blog/blog-small-4.jpg" alt="blog" />
                                    </div>
                                    <div className="blog-small-right">
                                        <h5>Next Generation Smartphone - HUAWEI MATE X</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-widget wow fadeInRight" data-wow-duration=".3s" data-wow-delay=".4s" style="visibility: visible;">
                            <h3 className="widgettitle">Bongosoft Ltd.</h3>
                            <ul className="info-contact">
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    House # kha-199/3 &amp; 4 ( Venus Complex ),
                                    Level # 9, Suit # 903,
                                    Middle Badda, Dhaka-1212
                                </li>
                                <li><i className="fa fa-phone"></i> +8801911-115231</li>
                                <li><i className="fa fa-phone"></i> +8801707-115231</li>
                                <li><i className="fa fa-envelope-o"></i> info@bongosoftbd.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-widget-map wow fadeInRight" data-wow-duration=".5s" data-wow-delay="1.3s" style="visibility: visible;">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2111114453965!2d90.42339031494753!3d23.775495584577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c791e9b32d9b%3A0x2bde4403d24db436!2sBongosoft+Ltd.!5e0!3m2!1sen!2sbd!4v1547292632973" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;