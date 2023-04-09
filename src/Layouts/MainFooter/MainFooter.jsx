import React from 'react';
import mainfooter from './mainfooter.module.css';
import SmallBlog6 from '../../Media/blog-small-6.jpg'
import SmallBlog4 from '../../Media/blog-small-4.jpg'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopesBulk, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const MainFooter = () => {
    return (
        <>
         <div className={`${mainfooter.wrapper} container`}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className={mainfooter.footer_widget}>
                            <h3 className={mainfooter.widgettitle}>ABOUT US</h3>
                            <p>Bongosoft is a leading web design company in Bangladesh. We are also a digital marketing agency in Bangladesh providing not only website design & development, seo service but also graphic designing, content marketing, making online Bangla newspaper and effective social media marketing all over Bangladesh and many more. We can provide the solution for your all kinds of digital need.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className={`${mainfooter.footerWidget} ${mainfooter.recent_post}`} style={{visibility: "visible"}}>
                            <h3 className={mainfooter.widgettitle}>RECENT POSTS</h3>
                            <div className={mainfooter.blog_small}>
                                <a href="blog-details-6.php">
                                    <div className={mainfooter.blog_small_left}>
                                       <Image src={SmallBlog6} className='img-fluid'/>
                                    </div>
                                    <div className={mainfooter.blog_small_right}>
                                        <h5>Best File Sharing Websites To Share Large File In Online</h5>
                                    </div>
                                </a>
                            </div>
                            <div className={mainfooter.blog_small}>
                                <a href="blog-details-4.php">
                                    <div className={mainfooter.blog_small_left}>
                                        <Image src={SmallBlog4} className='img-fluid'/>
                                    </div>
                                    <div className={mainfooter.blog_small_right}>
                                        <h5>Next Generation Smartphone - HUAWEI MATE X</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className={mainfooter.footer_widget}>
                            <h3 className={mainfooter.widgettitle}>Bongosoft Ltd.</h3>
                            <ul className={mainfooter.info_contact}>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                    House # kha-199/3 &amp; 4 ( Venus Complex ),
                                    Level # 9, Suit # 903,
                                    Middle Badda, Dhaka-1212
                                </li>
                                <li><FontAwesomeIcon icon={faPhone}/> +8801911-115231</li>
                                <li><FontAwesomeIcon icon={faPhone}/> +8801707-115231</li>
                                <li><FontAwesomeIcon icon={faEnvelope}/>
                                    info@bongosoftbd.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className={mainfooter.map} style={{visibility: "visible;"}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2111114453965!2d90.42339031494753!3d23.775495584577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c791e9b32d9b%3A0x2bde4403d24db436!2sBongosoft+Ltd.!5e0!3m2!1sen!2sbd!4v1547292632973" width="100%" height="250" frameborder="0" style={{border: "0"}} allowfullscreen=""></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MainFooter;