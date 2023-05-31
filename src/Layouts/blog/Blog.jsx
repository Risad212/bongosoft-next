import React from 'react';
import blog from './blog.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
/*--------------- import blog images -------------------*/
import chrome from '../../Media/chrome-top-ten-extensions-small-image.jpg';
import blogsmall2 from '../../Media/blog-small-2.jpg';
import blogsmall3 from '../../Media/blog-small-3.jpg';
import blogsmall4 from '../../Media/blog-small-4 (1).jpg';
import blogsmall5 from '../../Media/blog-small-5.jpg';
import blogsmall6 from '../../Media/blog-small-6 (1).jpg';
import blogsmall1 from '../../Media/blog-small-1.jpg';


const Blog = () => {
    return (
        <>
            <div className={blog.all_post}>
                <div className="container">
                    <div class="row">
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={chrome} alt="Top 10 Productivity Extensions for Chrome Web Browser" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">Top 10 Productivity Extensions for Chrome Web Browser</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at October 28, 2019 </div>
                                        <p class={blog.text}>There are limitless ways to ...</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall2} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">Top 5 Best Free Adware Removal Tools For Windows</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at May 14, 2019 </div>
                                        <p class={blog.text}>It's can remove, Spyware, Rootkits, PUPs, Virus, Malware, and ...</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall3} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">BEST FREE MICROSOFT OFFICE ALTERNATIVES</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at May 14, 2019 </div>
                                        <p class={blog.text}>10 Best Free Microsoft Office Alternatives</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall4} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">NEXT GENERATION SMARTPHONE</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at March 30, 2019 </div>
                                        <p class={blog.text}>Behold the wonder of the Huawei Mate X</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall5} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">THE 5 MOST IMPORTANT SEO TIPS YOU NEED TO KNOW-NEIL PATEL</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at March 25, 2019 </div>
                                        <p class={blog.text}>Important SEO Tips</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall6} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">BEST FILE SHARING WEBSITES TO SHARE LARGE FILE IN ONLINE</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at June 14, 2019 </div>
                                        <p class={blog.text}>Here we have stated 10 best sites that you will</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall1} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#">BEST WINDOWS 10 THEMES/SKINS 2019</a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at March 25, 2019 </div>
                                        <p class={blog.text}>Here are top 20 best HD Windows 10 themes and Skins 2019 that will enhance your Windows 10 look</p>
                                        <div class="link-btn"><a href="#" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></a></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="row">
                        <div className={`text-center`}>
                            <nav aria-label="Page navigation example">
                                <ul class={`pagination ${blog.pagination}`}>
                                    <li class="page-item"><a class={`page-link ${blog.active}`} href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;