import React from 'react';
import layout from './blogdetails.module.css';
/*---- import image --------*/
import { detailsHeadinfo } from '../../DataStorge/Datastorge';
import { useRouter } from 'next/router';

const Blog_Page_Details_Head = () => {
    const router = useRouter();
    const path = router.asPath;
    const slice = path.slice(6)

    const getHeadInfo = detailsHeadinfo.filter((elem) => {
        return elem.key === slice;
    })
    return (
        <>
            <article className={`${layout.single_blog_post}`}>
                {
                    getHeadInfo
                      && getHeadInfo.map((elem) => {
                        return (
                            <>
                                <div className={layout.single_post_images}>
                                    <img className="img-fluid" src={elem?.img} alt="Blog Details" />
                                </div>
                                <div className={layout.single_post_content}>
                                    <div className={layout.single_post_header}>
                                        <h1 className={layout.blog_post_title}>{elem?.title}</h1>
                                        <ul className={layout.meta_info}>
                                            <li><a href="#">{elem?.author}</a></li>
                                            <li><a href="#">{elem?.date}</a></li>
                                            <li><a href="#">{elem?.category}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </article>
        </>
    )
};

export default Blog_Page_Details_Head;