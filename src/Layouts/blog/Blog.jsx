import React from 'react';
import blog from './blog.module.css';
import Image from 'next/image';
import chrome from '../../Media/chrome-top-ten-extensions-small-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


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
                                    <h2><a href="chrome-top-ten-extensions-details.php">Top 10 Productivity Extensions for Chrome Web Browser</a></h2>
                                    <div class={blog.info}>By <em><a href="#">Admin</a></em> at October 28, 2019 </div>
                                    <p class={blog.text}>There are limitless ways to ...</p>
                                    <div class="link-btn"><a href="chrome-top-ten-extensions-details.php" class={`${blog.primary_btn} ${blog.hvr_bounce_to_left}`}><span class={blog.btn_text}> MORE </span><span class={blog.icon}><FontAwesomeIcon icon={faArrowRightLong}/></span></a></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
         </div>
       </>
    );
};

export default Blog;