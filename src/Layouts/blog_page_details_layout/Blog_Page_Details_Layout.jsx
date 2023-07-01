import React from 'react';
import layout from './layout.module.css';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';
import Blog_Page_Details_Content from '@/Components/Blog_Page_Details_Content/Blog_Page_Details_Content';


const Blog_Page_Details_Layout = () => {
   return (
      <>
         <section style={{padding: '80px 0'}}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-9">
                    <Blog_Page_Details_Content />
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

export default Blog_Page_Details_Layout;