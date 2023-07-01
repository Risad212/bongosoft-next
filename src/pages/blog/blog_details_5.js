import React from 'react';
import Blog_Comment from '@/Components/BlogComment/Blog_Comment';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';
import Blog_Page_Details_Head from '@/Components/Blog_Page_Details_Content/Blog_Page_Details_Head';
import layout from './blog.module.css';


const blog_details_5 = () => {
    return (
        <>
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <Blog_Page_Details_Head />
                            <div class={layout.single_post_content_five}>
                                <h4>Important SEO Tips</h4>
                                <p>1. Remove anything that slows down your site.</p>
                                <p>2. Link to other websites with relevant content.</p>
                                <p>3. Write for humans first, search engines second.</p>
                                <p>4. Encourage other trustworthy sites to link to you.</p>
                                <p>5. Have web analytics in place at the start.</p>
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

export default blog_details_5;


