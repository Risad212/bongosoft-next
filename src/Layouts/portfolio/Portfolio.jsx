import React from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
/*--- import all images ----*/
import jagoron from '../../Media/dailyjagaran.com.jpg';

const Portfolio = () => {
    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div class={`${portfolio.heading_title} client-title text-center`}>
                    <h2>Portfolio</h2>
                    <div className="box">
                        <div className="box-sm red"></div>
                        <div className="box-sm orange"></div>
                        <div className="box-sm yellow "></div>
                        <div className="box-sm green "></div>
                        <div className="box-sm blue "></div>
                        <div className="box-sm purple"></div>
                    </div>
                </div>
                {/*----- filter ------*/}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className={`${portfolio.portfolio_filter} clearfix`}>
                            <ul class="text-center">
                                <li><a href="javascript:void(0)" class="filter active" data-filter="all">All</a></li>
                                <li><a href="javascript:void(0)" class="filter" data-filter=".design">Design &amp; Development</a></li>
                                <li><a href="javascript:void(0)" class="filter" data-filter=".development">Software Development</a></li>
                                <li><a href="javascript:void(0)" class="filter" data-filter=".graphic">Graphic Design</a></li>
                                <li><a href="javascript:void(0)" class="filter" data-filter=".seo">SEO &amp; SMM</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*-------- Filter Data -----*/}
                <div className={portfolio.portfolio_item_wrapper}>
                    <ul className={portfolio.grid_filter}>
                        <li>
                            <div className={portfolio.single_gallery_item}>
                                <a data-target="#works_details" data-toggle="modal" href="#">
                                    <Image className="img-fluid" src={jagoron} alt="Dailyjagaran" />
                                        {/* -- Single gallery Item hover caption -- */}
                                        <div className={portfolio.hover_overlay}>
                                            <div className={portfolio.table}>
                                                <div className={portfolio.table_cell}>
                                                    <div className={portfolio.gallery_info}>
                                                        <h5> Design &amp; Development </h5>
                                                        <p> Making News Portal For Dailyjagaran </p>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                                  </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;