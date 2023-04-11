import React from 'react';
import counter from './counter.module.css';
import Image from 'next/image';
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
                        <div className="counter-wrapper">
                            <div className="row">
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Happy Clients</h3>
                                    <span>191</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}><Image src={Happy} alt="img"/></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Complete Projects</h3>
                                    <span className="counter">350</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}><Image src={Complete} alt="img" /></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Cup Of Coffee</h3>
                                    <span className="counter">650</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}><Image src={Tea} /></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Free Resource</h3>
                                    <span className="counter">6</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}><Image src={Free} alt="img" /></div>
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