import React from 'react';
import client from './client.module.css';
import Image from 'next/image';
/*----- import client images ------*/
import client1 from '../../Media/simanta-prodhan.jpg';
import client2 from '../../Media/outher-01.jpg';
import Slider from 'react-slick';

const Client = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className={client.container}>
            <div className="container">
                <div className={`${client.heading_title} text-center`}>
                    <div
                        data-aos="fade-down"
                        data-aos-once="true"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                    >
                        <h2>Testimonials</h2>
                    </div>
                    <div className={client.box}
                        data-aos="fade-left"
                        data-aos-once="true"
                        data-aos-delay="1200"
                        data-aos-duration="1000"
                    >
                        <div className={`${client.boxSm} ${client.red}`}></div>
                        <div className={`${client.boxSm} ${client.orange}`}></div>
                        <div className={`${client.boxSm} ${client.yellow}`}></div>
                        <div className={`${client.boxSm} ${client.green}`}></div>
                        <div className={`${client.boxSm} ${client.blue}`}></div>
                        <div className={`${client.boxSm} ${client.purple}`}></div>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                        <div className={`testimonial ${client.testimonial_style}`}>
                            <div className={client.single_testimonial}>
                                <div className={client.testimonial_author}>
                                    <div className={client.image}>
                                        <Image src={client1} alt="Simanta Prodhan" />
                                    </div>
                                    <div className={`${client.outhor_info} ${client.simanta_review}`}>
                                        <h4>Simanta Prodhan</h4>
                                        <p>Editor and Publisher NarayanganjToday </p>
                                    </div>
                                </div>
                                <div className={client.testimonial_dec}>
                                    <p>I am satisfied with their sincerity and service as a client. I hope, they will become popular in the country, their service and sincerity. Good Luck</p>
                                </div>
                            </div>
                        </div>
                        <div className={`testimonial ${client.testimonial_style}`}>
                            <div className={client.single_testimonial}>
                                <div className={client.testimonial_author}>
                                    <div className={client.image}>
                                        <Image src={client2} alt="Zakuline Fernandez" />
                                    </div>
                                    <div className={`${client.outhor_info}`}>
                                        <h4>Zakuline Fernandez</h4>
                                        <p>CEO</p>
                                    </div>
                                </div>
                                <div className={client.testimonial_dec}>
                                    <p>Sawny is one of the most popular real estate company all around USA. You can find your dream property or the build erty with us. We always provide importance</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Client;