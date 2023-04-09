import React from 'react';
import ourwork from './ourwork.module.css';

const OurWork = () => {
    return (
        <>
            <div className="container">
                <div class="container-about">
                    <div class="heading-title text-center">
                        <h2 class="wow fadeInDown" data-wow-duration=".4s" data-wow-delay=".5s" style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.5s; animation-name: fadeInDown;"> How We Work ? </h2>
                        <div class="box wow fadeInRight" data-wow-duration=".4s" data-wow-delay="1.0s" style="visibility: visible; animation-duration: 0.4s; animation-delay: 1s; animation-name: fadeInRight;">
                            <div class="box-sm red"></div>
                            <div class="box-sm orange"></div>
                            <div class="box-sm yellow "></div>
                            <div class="box-sm green "></div>
                            <div class="box-sm blue "></div>
                            <div class="box-sm purple"></div>
                        </div>
                    </div>
                    <div class="row sub-about">
                        <div class="col-md-4 text-center" style={{visibility: "visible",animationDelay: '5s',animationDelay: "1.2s",   animationName: fadeInLeft}}>
                            <div class="block mb-5">
                                <div class="block-border">
                                    <div class="icon-box">
                                        <img src="" alt="Icon" />
                                    </div>
                                    <div class="content text-center">
                                        <h3> Research </h3>
                                        <p>Research is vastly crucial for any service. We research every part of our work. Our research team does the primary work so that we can proceed to the next step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center wow fadeInUp" style={{visibility: "visible",animationDelay: '5s',animationDelay: "1.2s",   animationName: fadeInLeft}}>
                            <div class="block mb-5">
                                <div class="block-border development">
                                    <div class="icon-box">
                                        <img src="" alt="Icon" />
                                    </div>
                                    <div class="content text-center">
                                        <h3> Development </h3>
                                        <p>After research about our project, we are going to develop our idea. We build our project scratch to serve you the perfect. Your project is our concern.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center wow fadeInRight" style={{visibility: "visible",animationDelay: '5s',animationDelay: "1.2s",   animationName: fadeInLeft}}>
                            <div class="block mb-5">
                                <div class="block-border implement">
                                    <div class="icon-box">
                                        <img src="" alt="Icon" />
                                    </div>
                                    <div class="content text-center">
                                        <h3> Implement </h3>
                                        <p>After the perfect scratching, we implement the ideas in the project to satisfy you completely. We love to meet your requirement. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default OurWork;