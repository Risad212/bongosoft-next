import React from 'react';
import counter from './counter.module.css';
import Image from 'next/image';
/*---- images import ---------*/
import Happy from '../../Media/happy.png'
import Complete from '../../Media/complate.png'
import Tea from '../../Media/tea.png'
import Free from '../../Media/free.png'



const Counter = () => {
    return (
        <>
            <section id="counter" className={counter.counter_section}>
                <div className="overlay">
                    <div className="container">
                        <div className={counter.counter_wrapper}>
                            <div className="row">
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Happy Clients</h3>
                                    <span>191</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}
                                           data-aos="fade-down" 
                                           data-aos-once="true"
                                           data-aos-duration="1000"
                                         ></div>
                                        <div className={counter.counter_img}
                                           data-aos="fade-up" 
                                           data-aos-once="true"
                                           data-aos-duration="1000"
                                           data-aos-delay="200"
                                         ><Image src={Happy} alt="img"/></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Complete Projects</h3>
                                    <span>350</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}
                                            data-aos="fade-down" 
                                            data-aos-once="true"
                                            data-aos-duration="1000"
                                         ></div>
                                        <div className={counter.counter_img}
                                           data-aos="fade-up" 
                                           data-aos-once="true"
                                           data-aos-duration="1000"
                                           data-aos-delay="400"
                                         ><Image src={Complete} alt="img" /></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Cup Of Coffee</h3>
                                    <span>650</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}
                                            data-aos="fade-down" 
                                            data-aos-once="true"
                                            data-aos-duration="1000"
                                         ></div>
                                        <div className={counter.counter_img}
                                           data-aos="fade-up" 
                                           data-aos-once="true"
                                           data-aos-duration="1000"
                                           data-aos-delay="600"
                                         ><Image src={Tea} />
                                         </div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Free Resource</h3>
                                    <span>6</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}
                                           data-aos="fade-down" 
                                           data-aos-once="true"
                                           data-aos-duration="1000"
                                         ></div>
                                        <div className={counter.counter_img}
                                           data-aos="fade-up" 
                                           data-aos-once="true"
                                           data-aos-duration="1000"
                                           data-aos-delay="800"
                                         ><Image src={Free} alt="img" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;