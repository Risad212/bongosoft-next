import React from 'react';
import review from './testimonial.module.css'
import DrNeem from '../../Media/dr-neem.jpg'
import women from '../../Media/women.jpg'
import Image from 'next/image';
// ================ Owl slider ====================
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const testimonial = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green", fontSize: "50px" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    return (
        <>
            <section id="clients" class={review.clients_section}>
                <div class="container">
                    <div class={`${review.heading_title} client-title text-center`}>
                        <h2> Our Valuable Clients </h2>
                        <div className="box">
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
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={women} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                    </Slider>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default testimonial;