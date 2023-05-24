import React, { useEffect, useState } from 'react';
// ================ Owl slider ====================
import Slider from "react-slick";
import review from './testimonial.module.css'
//=========== client image import =============
import Image from 'next/image';
import DrNeem from '../../Media/dr-neem.jpg'
import women from '../../Media/women.jpg'
import TnNews from '../../Media/tn.jpg'
import Mega from '../../Media/mega.jpg'
import powereng from '../../Media/powereng.jpg'
import offerdgs from '../../Media/offerdgs.png'
import agaminews from '../../Media/agami-news.jpg'
import carier from '../../Media/carier-logo.jpg'
import alokito from '../../Media/alokito-news.jpg'
import polash from '../../Media/polas.jpg'
import aaa from '../../Media/aaa.png'
import chicken from '../../Media/chicken.jpg'
import gonews from '../../Media/gonews.jpg'
import nbl from '../../Media/nbl.jpg'
import jagoron from '../../Media/jagoron.jpg'
import hilton from '../../Media/hilton.jpg';

const testimonial = () => {
    const [slider, setSlider] = useState([
        { img: jagoron, link: 'https://www.drneem.com/' },
        { img: women, link: 'https://www.drneem.com/' },
        { img: TnNews, link: 'https://www.drneem.com/' },
        { img: Mega, link: 'https://www.drneem.com/' },
        { img: DrNeem, link: 'https://www.drneem.com/' },
        { img: powereng, link: 'https://www.drneem.com/' },
        { img: offerdgs, link: 'https://www.drneem.com/' },
        { img: agaminews, link: 'https://www.drneem.com/' },
        { img: carier, link: 'https://www.drneem.com/' },
        { img: alokito, link: 'https://www.drneem.com/' },
        { img: polash, link: 'https://www.drneem.com/' },
        { img: aaa, link: 'https://www.drneem.com/' },
        { img: chicken, link: 'https://www.drneem.com/' },
        { img: gonews, link: 'https://www.drneem.com/' },
        { img: nbl, link: 'https://www.drneem.com/' },
        { img: hilton, link: 'https://www.drneem.com/' },
    ])
    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
    };




    return (
        <>
            <section id="clients" class={review.clients_section}>
                <div class="container">
                    <div class={`${review.heading_title} client-title text-center`}>
                        <h2
                          data-aos="fade-down" 
                          data-aos-once="false"
                          data-aos-delay="500"
                          data-aos-duration="1000"
                         >Our Valuable Clients</h2>
                        <div className="box"
                           data-aos="fade-left" 
                           data-aos-once="false"
                           data-aos-delay="800"
                           data-aos-duration="1000"
                         >
                            <div className="box-sm red"></div>
                            <div className="box-sm orange"></div>
                            <div className="box-sm yellow "></div>
                            <div className="box-sm green "></div>
                            <div className="box-sm blue "></div>
                            <div className="box-sm purple"></div>
                        </div>
                    </div>
                    <div class={`row ${review.clients_sub}`}>
                        <Slider {...settings}>
                            {
                                slider.map((elem) => {
                                    return (
                                        <>
                                            <div className={`${review.clients_member} item`} 
                                               data-aos="fade-left" 
                                               data-aos-once="false"
                                               data-aos-delay="700"
                                               data-aos-duration="1000"
                                              >
                                                <a href={elem.link} target="_blank">
                                                    <div class={review.clients_photo}>
                                                        <Image className="img-fluid w-100" src={elem.img} alt="logo" />
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default testimonial;


