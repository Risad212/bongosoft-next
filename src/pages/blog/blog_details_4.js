import React from 'react';
import Blog_Comment from '@/Components/BlogComment/Blog_Comment';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';
import Blog_Page_Details_Head from '@/Components/Blog_Page_Details_Content/Blog_Page_Details_Head';
import layout from './blog.module.css';


const blog_details_4 = () => {
    return (
        <>
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <Blog_Page_Details_Head />
                            <div class={layout.single_post_content_four}>
                                <h4>HUAWEI MATE X</h4>
                                <p>Behold the wonder of the Huawei Mate X – the foldable phone unveiled by Huawei at MWC 2019 that throws in 5G just for the fun of it. This is a seriously good-looking device with seriously fast upload and download speeds to go with it.</p>
                                <p>When closed, there are screens front and back for you to use; when open, the Mate X sports an 8-inch display for all your multitasking needs. The grip on the side helps you hold it in tablet mode and holds the camera system too.</p>
                                <p>Under the hood you've got a Kirin 980 processor, 8GB of RAM, 512GB of storage, and of course that Balong 5000 multi-mode 5G chipset. The large 4,500mAh battery keeps everything powered. It's going to cost you though – the Huawei Mate X is going to be priced at €2,299 (about £2,000) when it ships in summer.</p>
                                <br />
                                <br />
                            </div>
                            <Blog_Comment />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <Blog_Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default blog_details_4;


