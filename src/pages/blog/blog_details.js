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
                            <div class={layout.single_post_content_saven}>
                                <p>Here are top 20 best HD Windows 10 themes and Skins 2019 that will enhance your Windows 10 look, Mac theme for windows 10.</p>
                                <h4>#1 Mac OS X El Capitan</h4>
                                <a target="_blank" href="https://skinpacks.com/download/windows-7/mac-os-x-skin-pack/"><p>Download link: https://skinpacks.com/download/windows-7/mac-os-x-skin-pack/</p></a>
                                <h4>#2 Aero Glass</h4>
                                <a target="_blank" href="https://skinpacks.com/aero-glass-theme-for-win10/"><p>Download link: https://skinpacks.com/aero-glass-theme-for-win10/</p></a>
                                <h4>#3 StartIsBack</h4>
                                <a target="_blank" href="https://skinpacks.com/startisback-for-win10-released/"><p>Download link: https://skinpacks.com/startisback-for-win10-released/</p></a>
                                <h4>#4 Stardock Start10</h4>
                                <a target="_blank" href="https://skinpacks.com/stardock-start10-for-win10/"><p>Download link: https://skinpacks.com/stardock-start10-for-win10/</p></a>
                                <h4>#5 Ubuntu SkinPack</h4>
                                <a target="_blank" href="https://skinpacks.com/ubuntu-skinpack-light-for-win10-released/"><p>Download link: https://skinpacks.com/ubuntu-skinpack-light-for-win10-released/</p></a>
                                <h4>#6 Silk</h4>
                                <a target="_blank" href="https://skinpacks.com/silk-theme-for-win10/"><p>Download link: https://skinpacks.com/silk-theme-for-win10/</p></a>
                                <h4>#7 Vanilla</h4>
                                <a target="_blank" href="https://skinpacks.com/vanilla-theme-for-win10/"><p>Download link: https://skinpacks.com/vanilla-theme-for-win10/</p></a>
                                <h4>#8 FootPaths Theme</h4>
                                <a target="_blank" href="https://support.microsoft.com/en-in/hub/4338813/windows-help?os=windows-10"><p>Download link: https://support.microsoft.com/en-in/hub/4338813/windows-help?os=windows-10</p></a>
                                <h4>#9 Oxford Theme</h4>
                                <a target="_blank" href="https://skinpacks.com/oxford-theme-for-win10/"><p>Download link: https://skinpacks.com/oxford-theme-for-win10/</p></a>
                                <h4>#10 Flattastic</h4>
                                <a target="_blank" href="https://skinpacks.com/flattastic-theme-for-win10/"><p>Download link: https://skinpacks.com/flattastic-theme-for-win10/</p></a>
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


