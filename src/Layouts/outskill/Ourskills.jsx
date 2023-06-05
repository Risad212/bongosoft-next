import React, { useEffect, useState } from 'react';
import skill from './ourskill.module.css';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgress from '@/Components/animatedProgressbar/AnimatedProgress';

const Ourskills = () => {
    return (
        <>
            <section className={skill.our_skill_2}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5" >
                            <div className={skill.chart_left_2}
                               data-aos="fade-down" 
                               data-aos-once="true"
                               data-aos-duration="800"
                               data-aos-delay="500"
                             >
                                <h2>experience</h2>
                                <h3>our professional skill &amp; experience</h3>
                                <p>Bongosoft Ltd. is was founded in 2017, provide complete service in Web design &amp; development, Apps development, software development, and full-service digital marketing. Our team members are devoted to delivering remarkable ROI to every client, and our dedication to results is evident in everything we do, including how we speak. We hold ourselves accountable for ensuring their investment brings a positive return.</p>
                                <a className={`btn ${skill.btn_date_picker_btn}`} href="#"
                                  data-aos="fade-left" 
                                  data-aos-once="true"
                                  data-aos-duration="800"
                                  data-aos-delay="700"
                                 >Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className={skill.chart_right_2}>
                                <div className={skill.box_chart} 
                                  data-aos="fade-down" 
                                  data-aos-once="true"
                                  data-aos-duration="500"
                                  data-aos-delay="900"
                                 >
                                    <div className={skill.chart}><AnimatedProgress value="90"/></div>
                                    <p>Web Design</p>
                                </div>
                                <div className={skill.box_chart}
                                    data-aos="fade-down" 
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                    data-aos-delay="1100"
                                 >
                                    <div className={skill.chart}><AnimatedProgress value="95"/></div>
                                    <p>Web Development</p>
                                </div>
                                <div className={skill.box_chart}
                                    data-aos="fade-down" 
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                    data-aos-delay="1300"
                                  >
                                    <div className={skill.chart}><AnimatedProgress value="80"/></div>
                                    <p>Software Development</p>
                                </div>
                                <div className={skill.box_chart}
                                    data-aos="fade-down" 
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                    data-aos-delay="1500"
                                 >
                                    <div className={skill.chart}><AnimatedProgress value="85"/></div>
                                    <p>Graphic Design</p>
                                </div>
                                <div className={skill.box_chart}
                                   data-aos="fade-down" 
                                   data-aos-once="true"
                                   data-aos-duration="500"
                                   data-aos-delay="1700"
                                 >
                                    <div className={skill.chart}><AnimatedProgress value="73"/></div>
                                    <p>App Development</p>
                                </div>
                                <div className={skill.box_chart}
                                   data-aos="fade-down" 
                                   data-aos-once="true"
                                   data-aos-duration="500"
                                   data-aos-delay="1900"
                                 >
                                    <div className={skill.chart}><AnimatedProgress value="93"/></div>
                                    <p>SEO &amp; SMM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ourskills;