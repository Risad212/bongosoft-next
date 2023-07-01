import React from 'react';
import Blog_Comment from '@/Components/BlogComment/Blog_Comment';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';
import Blog_Page_Details_Head from '@/Components/Blog_Page_Details_Content/Blog_Page_Details_Head';
import layout from './blog.module.css';

const blog_details_3 = () => {
    return (
        <>
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <Blog_Page_Details_Head />
                            <div class={layout.single_post_content_three}>
                                <p>10 Best Free Microsoft Office Alternatives</p>

                                <h4>#1 Google Docs, Google Sheets, Google Slide</h4>
                                <a target="_blank" href="https://www.google.co.in/docs/about/"><p>Download Link: https://www.google.co.in/docs/about/</p></a>

                                <h4>#2 Zoho Workplace</h4>
                                <a target="_blank" href="https://www.zoho.com/workplace/"><p>Download Link: https://www.zoho.com/workplace/</p></a>

                                <h4>#3 SoftMaker FreeOffice</h4>
                                <a target="_blank" href="https://www.freeoffice.com/en/"><p>Download Link: https://www.freeoffice.com/en/</p></a>

                                <h4>#4 WPS Office</h4>
                                <a target="_blank" href="https://www.wps.com/office-free"><p>Download Link: https://www.wps.com/office-free</p></a>

                                <h4>#5 FreeOffice</h4>
                                <a target="_blank" href="https://www.freeoffice.com/en/"><p>Download Link: https://www.freeoffice.com/en/</p></a>

                                <h4>#6 Calligra</h4>
                                <a target="_blank" href="https://www.calligra.org/"><p>Download Link: https://www.calligra.org/</p></a>

                                <h4>#7 Polaris Office</h4>
                                <a target="_blank" href="https://www.polarisoffice.com/en/"><p>Download Link: https://www.polarisoffice.com/en/</p></a>

                                <h4>#8 DropBox Paper</h4>
                                <a target="_blank" href="https://www.dropbox.com/paper"><p>Download Link: https://www.dropbox.com/paper</p></a>

                                <h4>#9 OpenOffice</h4>
                                <a target="_blank" href="https://www.openoffice.org/"><p>Download Link: https://www.openoffice.org/</p></a>

                                <h4>#10 AbiWord</h4>
                                <a target="_blank" href="https://www.abisource.com/"><p>Download Link: https://www.abisource.com/</p></a>

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

export default blog_details_3;


