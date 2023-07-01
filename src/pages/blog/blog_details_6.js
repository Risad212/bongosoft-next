import React from 'react';
import Blog_Comment from '@/Components/BlogComment/Blog_Comment';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';
import Blog_Page_Details_Head from '@/Components/Blog_Page_Details_Content/Blog_Page_Details_Head';
import layout from './blog.module.css';


const blog_details_6 = () => {
    return (
        <>
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <Blog_Page_Details_Head />
                            <div class={layout.single_post_content_six}>
                                <p>Here we have stated 10 best sites that you will surely like for sending huge files ranging up to GB’s to another PC over the internet with high transfer speed.</p>
                                <h4>#1 Google Drive</h4>
                                <a target="_blank" href="https://www.google.co.in/intl/en-GB/drive/"><p>Download Link: https://www.google.co.in/intl/en-GB/drive/</p></a>

                                <h4>#2 WeTransfer</h4>
                                <a target="_blank" href="https://wetransfer.com/"><p>Download Link: https://wetransfer.com/</p></a>

                                <h4>#3 HighTail</h4>
                                <a target="_blank" href="https://www.hightail.com/"><p>Download Link: https://www.hightail.com/</p></a>

                                <h4>#4 TransferBigFiles</h4>
                                <a target="_blank" href="https://www.transferbigfiles.com/"><p>Download Link: https://www.transferbigfiles.com/</p></a>

                                <h4>#5 DropSend</h4>
                                <a target="_blank" href="https://www.dropsend.com/"><p>Download Link: https://www.dropsend.com/</p></a>

                                <h4>#6 MailBigFile</h4>
                                <a target="_blank" href="https://www.mailbigfile.com/"><p>Download Link: https://www.mailbigfile.com/</p></a>

                                <h4>#7 Box</h4>
                                <a target="_blank" href="https://www.box.com/"><p>Download Link: https://www.box.com/</p></a>

                                <h4>#8 Egnyte</h4>
                                <a target="_blank" href="https://www.egnyte.com/"><p>Download Link: https://www.egnyte.com/</p></a>

                                <h4>#9 Sugarsync</h4>
                                <a target="_blank" href="https://www2.sugarsync.com/"><p>Download Link: https://www2.sugarsync.com/</p></a>

                                <h4>#10 Onehub</h4>
                                <a target="_blank" href="https://www.onehub.com/"><p>Download Link: https://www.onehub.com/</p></a>
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

export default blog_details_6;


