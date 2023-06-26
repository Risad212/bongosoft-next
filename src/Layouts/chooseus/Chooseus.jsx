import React from 'react';
import chooseus from './choose.module.css';
import Image from 'next/image';
/*---------- choose image -------------*/
import choose1 from '../../Media/choose-02.jpg';
import choose2 from '../../Media/choose-01.jpg';
/*----------- about content images ---------------*/
import feature5 from '../../Media/feature-5.png';
import feature7 from '../../Media/feature-7.png';
import feature6 from '../../Media/feature-6.png';
import feature8 from '../../Media/feature-8.png';

const Chooseus = () => {
    return (
        <div className={chooseus.container}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5" 
                       data-aos="fade-right" 
                       data-aos-once="true"
                       data-aos-duration="800"
                       data-aos-delay="500"
                      >
                        <div class={chooseus.choose_properties}>
                            <span class={chooseus.discount_stryker_2}>Bongosoft Ltd.</span>
                            <div class={chooseus.choose_provide}>
                                <div class={chooseus.image_1}>
                                    <Image src={choose1} alt="" />
                                    <div class={chooseus.price_box}>
                                        <p>Web Design</p>
                                    </div>
                                </div>
                                <div class={chooseus.image_2}>
                                    <Image src={choose2} alt="" />
                                    <div class={chooseus.price_box}>
                                        <p>SEO &amp; SMM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={`${chooseus.about_content} col-lg-7`}
                          data-aos="fade-left" 
                          data-aos-once="true"
                          data-aos-duration="800"
                          data-aos-delay="800"
                      >
                            <h2 className='title'>Why you <span class={chooseus.tc_1}>choose</span> us? <br /><span class={chooseus.tc_2}>because</span> we provide best <span class={chooseus.tc_1}>quality...</span></h2>
                            <p>We believe that creating customer-centric experiences. We’re innovators, creators, and designers who pride ourselves on also being trailblazers.</p>
                            <div class="row row-25">
                                <div class="about-feature col-md-6  col-sm-6 col-12 mb-35">
                                    <div class={chooseus.icon}><Image src={feature5} alt="" /></div>
                                    <div class={chooseus.content_two}>
                                        <h4>Strategy &amp; Planning</h4>
                                        <p>All our projects, large or small, begin here</p>
                                    </div>
                                </div>
                                <div class="about-feature col-md-6  col-sm-6 col-12 mb-35">
                                    <div class={chooseus.icon}><Image src={feature7} alt="" /></div>
                                    <div class={chooseus.content_two}>
                                        <h4>Development</h4>
                                        <p>Thoroughly considered, documented, cross platform, and forward thinking</p>
                                    </div>
                                </div>
                                <div class="about-feature col-md-6  col-sm-6 col-12 mb-35">
                                    <div class={chooseus.icon}><Image src={feature6} alt="" /></div>
                                    <div class={chooseus.content_two}>
                                        <h4>Support</h4>
                                        <p>Launching your site will be just the first step in what should ideally be an ongoing process </p>
                                    </div>
                                </div>
                                <div class="about-feature col-md-6  col-sm-6 col-12 mb-35">
                                    <div class={chooseus.icon}><Image src={feature8} alt="" /></div>
                                    <div class={chooseus.content_two}>
                                        <h4>Optimization</h4>
                                        <p>Once a project is launched, attention needs to turn to its ongoing performance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;