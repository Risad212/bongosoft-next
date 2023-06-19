import React, { useState } from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion"

const Portfolio = (props) => {
    const {data,title,btntxt} = props;
    const [filter, setFilter] = useState(data)
    const filterData = (key) => {
        const getData = data.filter((elem) => {
            return elem.key === key;
        })
        if (key === 'all') {
            setFilter(data)
        } else {
            setFilter(getData)
        }
    }
    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div class={`${portfolio.heading_title} client-title text-center`}>
                    <h2
                     data-aos="fade-down" 
                     data-aos-once="true"
                     data-aos-delay="500"
                     data-aos-duration="1000"
                     >{title}</h2>
                    <div className="box"
                      data-aos="fade-left" 
                      data-aos-once="true"
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
                {/*----- filter ------*/}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className={`${portfolio.portfolio_filter} clearfix`}
                           data-aos="fade-right" 
                           data-aos-once="true"
                           data-aos-delay="1000"
                           data-aos-duration="800"
                          >
                            <ul class="text-center">
                                <li><a href="javascript:void(0)" onClick={() => filterData('all')}>All</a></li>
                                <li><a href="javascript:void(0)" onClick={() => filterData('design and development')}>Design &amp; Development</a></li>
                                <li><a href="javascript:void(0)" onClick={() => filterData('softoware development')}>Software Development</a></li>
                                <li><a href="javascript:void(0)" onClick={() => filterData('graphic design')}>Graphic Design</a></li>
                                <li><a href="javascript:void(0)" onClick={() => filterData('seo')}>SEO &amp; SMM</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*-------- Filter Data -----*/}
                <div className={portfolio.portfolio_item_wrapper}>
                    <ul className={portfolio.grid_filter}>
                        {
                            filter.map((elem) => {
                                console.log(elem?.animation);
                                return (
                                    <>
                                        <li
                                          data-aos={elem?.animation?.name}
                                          data-aos-once="true"
                                          data-aos-delay={elem?.animation?.delay}
                                          data-aos-duration={elem?.animation?.duration}
                                         >
                                            <AnimatePresence>
                                                <motion.div
                                                    layout
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: .5 }}
                                                    key={elem.key}
                                                    className={portfolio.single_gallery_item}>
                                                    <a data-target="#works_details" data-toggle="modal" href="#">
                                                        <Image className="img-fluid" src={elem.img} alt={elem?.altTag} />
                                                        {/* -- Single gallery Item hover caption -- */}
                                                        <div className={portfolio.hover_overlay}>
                                                            <div className={portfolio.table}>
                                                                <div className={portfolio.table_cell}>
                                                                    <div className={portfolio.gallery_info}>
                                                                        <h5>{elem.title}</h5>
                                                                        <p>{elem.disc}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </motion.div>
                                            </AnimatePresence>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                {/*----- button row ------*/}
                <div class="row">
                    <div class="text-center m-auto"
                       data-aos="fade-left" 
                       data-aos-once="true"
                       data-aos-delay="800"
                       data-aos-duration="400"
                     >
                        <a class={`btn ${portfolio.btn_date_picker}`} href="#">{btntxt}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;