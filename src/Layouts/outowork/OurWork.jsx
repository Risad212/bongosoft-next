import React from 'react';
import ourwork from './ourwork.module.css';
import res from '../../Media/res.png'
import dev from '../../Media/dev.png'
import imp from '../../Media/imp.png'
import Image from 'next/image';
const OurWork = () => {
    return (
        <>
            <div className="container">
                <div className={ourwork.containerAbout}>
                    <div className={`${ourwork.heading_title} text-center`}>
                        <h2> How We Work ? </h2>
                        <div className={ourwork.box}>
                            <div className={`${ourwork.boxSm} ${ourwork.red}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.orange}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.yellow}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.green}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.blue}`}></div>
                            <div className={`${ourwork.boxSm} ${ourwork.purple}`}></div>
                        </div>
                    </div>
                    <div className={`row ${ourwork.sub_about}`}>
                        <div className="col-md-4 text-center">
                            <div className={`${ourwork.block} mb-5`}>
                                <div className={ourwork.block_border}>
                                    <div className={ourwork.icon_box}>
                                        <Image src={res} alt="Icon" />
                                    </div>
                                    <div className="content text-center">
                                        <h3> Research </h3>
                                        <p>Research is vastly crucial for any service. We research every part of our work. Our research team does the primary work so that we can proceed to the next step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className={`${ourwork.block} mb-5`}>
                                <div className={ourwork.block_border}>
                                    <div className={ourwork.icon_box}>
                                        <Image src={dev} alt="Icon" />
                                    </div>
                                    <div className="content text-center">
                                        <h3> Development </h3>
                                        <p>After research about our project, we are going to develop our idea. We build our project scratch to serve you the perfect. Your project is our concern.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className={`${ourwork.block} mb-5`}>
                                <div className={ourwork.block_border}>
                                    <div className={ourwork.icon_box}>
                                        <Image src={imp} alt="Icon" />
                                    </div>
                                    <div className="content text-center">
                                        <h3> Implement </h3>
                                        <p>After the perfect scratching, we implement the ideas in the project to satisfy you completely. We love to meet your requirement. </p>
                                    </div>
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