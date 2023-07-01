import React from 'react';
import counter from './counter.module.css';
import Image from 'next/image';
/*---- images import ---------*/
import Happy from '../../Media/happy.png'
import Complete from '../../Media/complate.png'
import Tea from '../../Media/tea.png'
import Free from '../../Media/free.png'
import AnimatedCounter from '@/Components/animatedCounter/AnimatedCounter';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    return (
        <>
            <section id="counter" className={counter.counter_section}>
                <div className="overlay">
                    <div className="container">
                        <div className={counter.counter_wrapper}>
                            <div className="row">
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Happy Clients</h3>
                                    <span>{<AnimatedCounter data={{number: '195', duration: '2', delay: 3000}}/>}</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}><Image src={Happy} alt="img"/></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Complete Projects</h3>
                                    <span>{<AnimatedCounter data={{number: '350', duration: '2', delay: 3000}}/>}</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}><Image src={Complete} alt="img" /></div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Cup Of Coffee</h3>
                                    <span>{<AnimatedCounter data={{number: '650', duration: '2', delay: 3000}}/>}</span>
                                    <div className={counter.counter_effects}>
                                        <div className={counter.counter_circle}></div>
                                        <div className={counter.counter_img}>
                                          <Image src={Tea} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-3 col-sm-6 ${counter.counter_column}`}>
                                    <h3>Free Resource</h3>
                                    <span>{<AnimatedCounter data={{number: '6', duration: '2', delay: 3000}}/>}</span>
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




