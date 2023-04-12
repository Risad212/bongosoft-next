import React from 'react';
import review from './testimonial.module.css'
import DrNeem from '../../Media/dr-neem.jpg'
import Image from 'next/image';

const testimonial = () => {
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
                        <div class={review.clients_member}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div class={review.clients_member}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div class={review.clients_member}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div class={review.clients_member}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                        <div class={review.clients_member}>
                            <a href="https://www.drneem.com/" target="_blank">
                                <div class={review.clients_photo}>
                                    <Image className="img-fluid" src={DrNeem} alt="logo" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default testimonial;