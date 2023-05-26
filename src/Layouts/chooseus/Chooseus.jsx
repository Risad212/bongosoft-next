import React from 'react';
import chooseus from './choose.module.css';
import Image from 'next/image';
import choose1 from '../../Media/choose-02.jpg';
import choose2 from '../../Media/choose-01.jpg';

const Chooseus = () => {
    return (
        <div className={chooseus.container}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
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
                </div>
            </div>
        </div>
    );
};

export default Chooseus;