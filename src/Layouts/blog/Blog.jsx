import React from 'react';
import blog from './blog.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {blogDetails} from '../../DataStorge/Datastorge'



const Blog = () => {
    console.log(blogDetails);
    return (
        <>
            <div className={blog.all_post}>
                <div className="container">
                    <div class="row">
                        {/* <div class="col-md-6"
                            data-aos="fade-right" 
                            data-aos-once="true"
                            data-aos-duration="500"
                            data-aos-delay="800"
                         >
                            <article class={blog.single_post_item}>
                                <figure class={blog.image}><Image class="img-fluid" src={blogsmall1} alt="Post Image" /></figure>
                                <div class={blog.content_box}>
                                    <div class={blog.text_content}>
                                        <h2><a href="#"></a></h2>
                                        <div class={blog.info}>By <em><a href="#">Admin</a></em> at March 25, 2019 </div>
                                        <p class={blog.text}></p>
                                        <div class="link-btn"><Link href="blog/blog_details_6" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong} /></span></Link></div>
                                    </div>
                                </div>
                            </article>
                        </div> */}
                    </div>
                    <div class="row" 
                       data-aos="fade-up" 
                       data-aos-once="true"
                       data-aos-duration="800"
                       data-aos-delay="500"
                     >
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