import React from 'react';
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

const testimonial = () => {
    function SamplePrevArrow(props) {
        const { className,onClick } = props;
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
                                    <Image className="img-fluid" src={TnNews} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={Mega} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={powereng} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={offerdgs} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={agaminews} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={carier} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={alokito} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div className={`${review.clients_member} item`}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={polash} alt="logo" />
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