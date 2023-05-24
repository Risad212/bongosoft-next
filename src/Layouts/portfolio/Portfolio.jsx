import React, { useState } from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
/*--- import all images ----*/
import jagoron from '../../Media/dailyjagaran.com.jpg';
import graphic2 from '../../Media/graphic-2.jpg';
import coupdoc2 from '../../Media/coupdoc-2.jpg';
import pharmacy from '../../Media/pharmacy.jpg';
import smm from '../../Media/smm-2.jpg';
import software2 from '../../Media/software-2.jpg';
import gonews from '../../Media/gonews (1).jpg';
import megastar from '../../Media/megastar.jpg';
/*--- import all images End ----*/
import { AnimatePresence, motion } from "framer-motion"

const Portfolio = () => {
    const storge = [
        {
            key: 'design and development',
            img: jagoron,
            altTag: 'Dailyjagaran',
            title: 'Design & Development',
            disc: 'Making News Portal For Dailyjagaran',
        },
        {
            key: 'graphic design',
            img: graphic2,
            altTag: 'Logo for IBserver',
            title: 'Graphic Design',
            disc: 'Logo for IBserver',
        },
        {
            key: 'seo',
            img: coupdoc2,
            altTag: 'SEO & SMM',
            title: 'SEO & SMM',
            disc: 'Digital Marketing For CoupDoc',
        },
        {
            key: 'softoware development',
            img: pharmacy,
            altTag: 'Pharmacy Management System',
            title: 'Software Development',
            disc: 'Pharmacy Management System',
        },
        {
            key: 'seo',
            img: smm,
            altTag: 'Facebook Marketing For GoGmat',
            title: 'SEO & SMM',
            disc: 'Facebook Marketing For GoGmat',
        },
        {
            key: 'softoware development',
            img: software2,
            altTag: 'Point Of Sales Software',
            title: 'Software Development',
            disc: 'Point Of Sales Software',
        },
        {
            key: 'design and development',
            img: gonews,
            altTag: '"Gonews24',
            title: 'Design & Development',
            disc: 'Making News Portal For Gonews24',
        },
        {
            key: 'design and development',
            img: megastar,
            altTag: '',
            title: 'Design & Development',
            disc: 'Making Website for MegaStar Bangladesh Ltd.',
        },

    ]
    const [filter, setFilter] = useState(storge)

    const filterData = (key) => {
        const getData = storge.filter((elem) => {
            return elem.key === key;
        })
        if (key === 'all') {
            setFilter(storge)
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
                     data-aos-once="false"
                     data-aos-delay="500"
                     data-aos-duration="1000"
                     >Portfolio</h2>
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
                {/*----- filter ------*/}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className={`${portfolio.portfolio_filter} clearfix`}
                           data-aos="fade-right" 
                           data-aos-once="false"
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
                                return (
                                    <>
                                        <li
                                          data-aos="fade-down" 
                                          data-aos-once="false"
                                          data-aos-delay="800"
                                          data-aos-duration="1000"
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
                       data-aos-once="false"
                       data-aos-delay="800"
                       data-aos-duration="1000"
                     >
                        <a class={`btn ${portfolio.btn_date_picker}`} href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;